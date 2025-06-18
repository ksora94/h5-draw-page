# 红包活动页前端逻辑说明

## 页面入口参数

- URL 示例：`?appKey=xxx&did=xxx`
- 如 URL 中存在 `appKey` 和 `did`，需覆盖本地缓存的值。

---

## 本地存储逻辑（localStorage）

### 1. appKey 和 did
- 存储位置：localStorage
- 说明：无过期时间。
- 行为：每次进入页面，如果 URL 中包含 `appKey` 或 `did`，则覆盖本地缓存。

### 2. 广告列表（按 appKey 维度）
- 存储位置：cookie
- 缓存时长：5 分钟。
- 行为：若本地没有广告列表缓存，则调用 `/show` 接口时带上 `adverts=1`，以获取新的广告列表。

### 3. 当日已参与次数（按 appKey 维度）
- 存储位置：cookie
- 缓存时长：当天有效，第二天 0 点过期。
- 行为：
    - 每次点击“开红包”后 +1。
    - 每次点击后按广告列表顺序跳转，跳转完成后循环使用列表。

---

## 内存变量：info 信息（每次请求都要带）

- 每个接口请求都需携带 `info`。
- 每个接口响应会返回新的 `info`，需覆盖当前内存中的 `info`。
- 若响应中的 `info` 含有 `appKey` 或 `did`，也需覆盖 localStorage 中的对应字段。

---

## 接口域名

```
https://engine.pingping2022.com/
```

---

## 接口定义

### 1. 活动曝光

**POST** `/show`

#### 请求参数：
```json
{
  "info": {
    "appKey": "string",
    "did": "string"
    // ...其他字段
  },
  "adverts": 1 // 若需请求广告列表，传 1；否则不传或传其他值
}
```

#### 响应结构：
```json
{
  "code": 0,
  "data": {
    "info": {
      // ...更新后的 info 信息
    },
    "adverts": [
      {
        "id": 123,
        "landpage": "https://example.com",
        "creative": {
          "id": 456,
          "type": 1,
          "mainImage": "...",
          "icon": "...",
          "title": "...",
          "subtitle": "..."
        }
      }
    ]
  }
}
```

---

### 2. 抽奖历史

**POST** `/history`

#### 请求参数：
```json
{
  "info": {
    // 与 /show 相同结构
  }
}
```

#### 响应结构：
```json
{
  "code": 0,
  "data": {
    "info": {
      // ...更新后的 info 信息
    },
    "adverts": [ /* 同 /show 返回 */ ]
  }
}
```

---

### 3. 日志上报

**POST** `/log`

#### 请求参数：
```json
{
  "info": {
    // 与 /show 相同结构
  },
  "event": {
    "name": String  ( 活动参与：ACTIVITY_PLAY   广告曝光 ADVERT_SHOW   广告点击 ADVERT_CLICK)
    "advertId": 123 // 仅 ADVERT_SHOW 和 ADVERT_CLICK 时必传
  }
}
```

#### 响应结构：
```json
{
  "code": 0,
  "data": {
    "info": {
      // ...更新后的 info 信息
    }
  }
}
```

---

## 日志上报说明

每次点击“开红包”时，应同时上报以下三种事件（分别请求）：
- 活动参与：`ACTIVITY_PLAY`
- 广告曝光：`ADVERT_SHOW`
- 广告点击：`ADVERT_CLICK`









# 转盘话费页面前端逻辑说明

## 页面入口参数

- URL 示例：`?wyCallbackId=xxx&targetUrl=xxx`
- 页面依赖参数：
    - `wyCallbackId`：回调 ID
    - `targetUrl`：跳转目标地址

---

## 输入手机号逻辑

### 操作流程：

1. 用户输入手机号后点击“下一步”。

2. 前端进行格式校验：

    - 必须是 **1 开头的 11 位数字**
    - 格式错误时，`toast` 提示：**“请填写正确的手机号”**

3. 格式正确时，跳转到：

   ```
   {targetUrl}?wyCallbackId=xxx&phone=yyy
   ```

    - 其中 `phone` 参数为用户输入手机号的 **Base64 编码**

---

## 接口定义

### 接口：`POST /api/callback`

用于事件日志上报

#### 请求参数：

```json
{
  "wyCallbackId": "string",
  "event": 1001 | 1002 | 1003
}
```

#### 事件含义：

- `1001`：页面曝光
- `1002`：点击提交按钮
- `1003`：手机号验证通过，即将跳转

#### 响应结构：

```json
{
  "code": 0 // 成功；其他为失败
}
```
