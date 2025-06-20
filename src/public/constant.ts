const searchParams = new URLSearchParams(window.location.href.split('?')[1] || '');

let InfoData: any = {}

try {
  InfoData = JSON.parse(localStorage.getItem('info') || '{}');
} catch (e) {}

const cst = {
  Activity: {} as any,
  Info: {
    ...InfoData,
    appKey: searchParams.get('appKey') || InfoData.appKey || '',
    did: searchParams.get('did') || InfoData.did|| '',
  }
}

export default cst;

export const Privacy = ({contact}) => '欢迎您进入本广告推广页面，我们非常重视您的隐私保护和个人信息保护，请您在使用我们的服务前，仔细阅读并了解本《个人信息授权与保护声明》（以下简称为“本声明”）。对于与您的权益存在重大关系的条款，请您注意仔细阅读。我们在您进入页面时提醒您充分阅读本《个人信息授权与保护声明》，并选择接受或不接受。特别需要您注意，您一旦主动在页面填写您的个人信息并进行提交操作，即意味着您同意我们按照本声明收集、使用、共享您的相关信息。若您不接受本声明，请勿登记您的个人信息。\n' +
    '\n' +
    '如您未满18周岁，请您在监护人陪同下仔细阅读并充分理解本《个人信息授权与保护声明》，并征得监护人的同意后使用我们的服务或向我们提供信息。如对本声明或相关事宜有任何问题，例如您需要对您提交的个人信息进行更正、修改和删除，或是您需要就相关事项进行投诉，您可随时通过本个人信息授权与保护声明所载联系方式联系我们。本声明将帮助您了解以下内容：\n' +
    '\n' +
    '一、我们收集信息的原则及目的\n' +
    '\n' +
    '二、我们如何收集和使用您的个人信息\n' +
    '\n' +
    '三、我们如何共享、转让、公开披露您的个人信息\n' +
    '\n' +
    '四、我们如何保存与保护您的个人信息\n' +
    '\n' +
    '五、您对个人信息享有的权利\n' +
    '\n' +
    '六、我们如何处理未成年人个人信息\n' +
    '\n' +
    '七、本声明如何更新\n' +
    '\n' +
    '八、如何联系我们\n' +
    '\n' +
    '九、适用法律\n' +
    '\n' +
    '一、我们收集信息的原则及目的\n' +
    '\n' +
    '我们深知个人信息对您的重要性，我们将恪守以下原则保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。我们承诺，将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。您理解并同意，且我们承诺仅将收集到的您的个人信息用于以下目的：1. 保障为您所提供的产品或服务功能的正常实现。\n' +
    '\n' +
    '2. 实现对您的推送功能，了解您的网络消费习惯，从而针对性地回应您的需求，向您推送广告内容（包括线上推送、短信推送以及电话等形式）。\n' +
    '\n' +
    '3. 帮助我们维护和改进我们的产品或服务，提升用户体验。\n' +
    '\n' +
    '二、我们如何收集和使用您的个人信息\n' +
    '\n' +
    '个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。个人敏感信息是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息（我们将在本声明中对涉及到的个人敏感信息以加粗字体进行显著标识）。我们仅向您收集必要的个人信息，并会尽全力保护您的个人信息安全可靠。\n' +
    '\n' +
    '您需要注意的是，以下个人信息均需您自愿提供。您有权拒绝提供，但可能无法正常使用相应的服务、功能或者无法达到服务拟达到的效果。经您授权同意后，您已知晓并同意在您下次浏览本落地页面时，我们会帮您预先填写您上次输入的历史信息以提升您的使用体验，且只有您点击提交按钮之后，才会将该等信息共享给为您实际提供服务、功能的供应商、服务提供商和其他合作伙伴或是为此目的所涉及的必要第三方，以达到服务效果。您可拒绝使用预填充功能，或者拟撤回使用预填充功能的授权，您仍然可以主动输入相关信息并继续使用我们的产品/服务。\n' +
    '\n' +
    '（一）我们收集和使用您的个人信息的范围 \n' +
    '\n' +
    '1. 下单及订单管理\n' +
    '\n' +
    '为了向您配送货物或提供相关服务，当您准备登记您的信息以促成交易的达成时，我们会生成您购买该商品或服务的订单。同时，该订单中会载明订单编号、您所购买的商品或服务信息、下单时间等。为此，我们将依据不同的服务内容收集如下您的个人信息：\n' +
    '\n' +
    '（1）对于需要进行货物配送服务的，我们可能需收集您的姓名、手机号、地址。如涉及跨境货物配送，我们可能还需为海关报关等必要目的，收集您的身份证号码。\n' +
    '\n' +
    '（2）对于特定的需要登记信息进行意见回访的服务，我们可能需收集您的姓名、手机号、性别（若有）和身份证号码。\n' +
    '\n' +
    '（3）对于其他需要身份确认或验证的相关服务，我们可能需要收集您的姓名、手机号。请您注意，具体需要填写的信息可能会根据我们提供的产品/服务的不同而有所差异，请以届时向您展示的产品/服务以及所对应的要求填写相关个人信息。 \n' +
    '\n' +
    '2. 广告的定向推送\n' +
    '\n' +
    '为实现广告推送功能，向您展示您可能感兴趣的广告内容，在您进入本广告页面并同意本声明时，我们还可能会收集您的产品与/或服务的设备信息，包括网络身份标识信息（手机IPV4地址、IP）、网络信息、手机硬件信息（电量、品牌、型号、内存、屏幕分辨率、CPU信息）和运营商信息、操作日志。\n' +
    '\n' +
    '请您注意，单独的设备信息、浏览器类型或仅搜索关键词信息无法单独识别您的身份，不属于您的个人信息，我们有权以任何的目的对其进行使用；只有当您的单独的设备信息、浏览器类型或搜索关键词信息与您的其他信息相互结合使用并可以识别您的身份时，则在结合使用期间，我们会将您的设备信息、浏览器类型或搜索关键词信息作为您的个人信息，按照本声明对其进行处理与保护。\n' +
    '\n' +
    ' 3. 定向营销推广\n' +
    '\n' +
    '为更好的丰富您的使用体验，优化定制服务，拓展私域推广渠道，我们或我们的关联公司将可能通过短信或电话联系的方式向您进行定向营销推广。为此，您授权并同意我们及关联公司和相关第三方主体收集您的手机号码，并通过手机号码与您进行联系。我们充分尊重您的个人意愿，对于上述定向营销推广，您有权退订或拒绝。对于短信推广的情况，您可短信回复“TD”或“退订”，我们将不再向您发送推广短信；对于电话推广的情况，您可在接到电话后明确表示“以后不再需要推广”，我们将不再向您进行电话推广。提请您注意，若您未进行上述表示，我们将视为您同意我们向您继续进行定向营销推广。\n' +
    '\n' +
    '（二）例外\n' +
    '\n' +
    '请注意，在以下情形中，收集、使用个人信息无需事先征得您的授权同意：\n' +
    '\n' +
    '1. 与我们履行法律法规规定的义务相关的；\n' +
    '\n' +
    '2. 与国家安全、国防安全直接相关的；\n' +
    '\n' +
    '3. 与公共安全、公共卫生、重大公共利益直接相关的；\n' +
    '\n' +
    '4. 与刑事侦查、起诉、审判和判决执行等直接有关的；\n' +
    '\n' +
    '5. 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；\n' +
    '\n' +
    '6. 所收集的个人信息是您自行向社会公众公开的；\n' +
    '\n' +
    '7. 根据您的要求签订和履行合同所必需的；\n' +
    '\n' +
    '8. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；\n' +
    '\n' +
    '9. 维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；\n' +
    '\n' +
    '10. 为新闻单位开展合法的新闻报道所必需的；\n' +
    '\n' +
    '11. 学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；\n' +
    '\n' +
    '12. 法律、行政法规规定的其他情形。\n' +
    '\n' +
    '三、我们如何共享、转让、公开披露您的个人信息\n' +
    '\n' +
    '为保障您享受服务的一致性，并方便统一管理您的信息，您同意我方公司及关联公司间共享您的信息。我们只会共享必要的个人信息，且我方及关联公司均受本声明之约束。此外，您理解并同意，在以下情况下，我们可能会与相关第三方共享、转让、公开披露您的个人信息。\n' +
    '\n' +
    '（一）共享\n' +
    '\n' +
    '仅为实现本声明中所声明的目的，我们可能会与合作伙伴共享您的某些个人信息。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的合规协定或做类似要求，要求他们按照我们的说明、本声明以及其他任何相关的保密和安全措施来处理个人信息。我们的合作伙伴无权将共享的个人信息用于经您授权以外的任何其他用途。您理解并同意，我们将与以下授权合作伙伴共享您的信息：\n' +
    '\n' +
    '1. 供应商、服务提供商和其他合作伙伴。为向您进行货物配送及提供服务，我们可能会将您主动登记提供的信息向该商品及服务的提供商或其他合作伙伴，以及为此目的所涉及的必要第三方（如该商品及服务的提供商或其他合作伙伴的代理商或配送服务商）进行共享，并由其在合法正当以及您已经向其授权的范围内使用，包括向您发送货物或与您进行必要的联系。\n' +
    '\n' +
    '2. 供应商、服务提供商和其他合作伙伴的代理商。由于本平台与您所需求的商品及服务的供应商、服务提供商之间可能存在非直接合作关系，因此，为完成您的货物配送及服务提供，我们可能将您主动登记的信息向商品供应商或服务提供商的代理商进行共享，并由其在合法正当以及您已经向其授权的范围内使用。\n' +
    '\n' +
    '3. 广告、分析服务类的授权合作伙伴。除非得到您的许可，否则我们不会将您的个人信息与提供广告、分析服务的授权合作伙伴分享。但我们可能会将您的匿名化或去标识化的个人信息及您的设备信息与广告、分析服务类的授权合作伙伴共享，以帮助其在不识别您的个人身份的前提下提升广告有效触达率。\n' +
    '\n' +
    '4. 定向营销推广的合作伙伴。由于定向营销推广服务的需要，我们将向相关合作伙伴共享您的个人手机号码。我们向您确认，该等手机号码的共享仅限于与您取得联系之目的使用。\n' +
    '\n' +
    '（二）转让\n' +
    '\n' +
    '我们不会将您的个人信息转让给任何第三方，但以下情况除外：\n' +
    '\n' +
    '1. 在获取您明确同意的情况下转让；\n' +
    '\n' +
    '2. 根据适用的法律法规、法律程序的要求、强制性的行政或司法要求必须提供；\n' +
    '\n' +
    '3. 在涉及合并、收购、分立、重组或破产清算等事项时，如涉及到个人信息转让，我们会以公示的方式向您告知相关情况，并要求新的持有您个人信息的公司、组织或实体继续受本声明的约束，否则我们将要求该公司、组织或实体重新向您征求授权同意。\n' +
    '\n' +
    '请您知悉，即使已经取得您的授权同意，我们也仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并尽可能地对共享内容中的个人信息进行去标识化或匿名化处理（视有权请求您的个人信息一方的要求而定）。（三）公开披露\n' +
    '\n' +
    '我们仅会在获得您明确同意后，或在法律法规、法律程序的要求、强制性的行政或司法要求的情况下公开披露您的个人信息。\n' +
    '\n' +
    '（四）例外\n' +
    '\n' +
    '请注意，在以下情形中，共享、转让、公开披露个人信息不必事先征得您的授权同意：\n' +
    '\n' +
    '1. 与我们履行法律法规规定的义务相关的；\n' +
    '\n' +
    '2. 与国家安全、国防安全直接相关的；\n' +
    '\n' +
    '3. 与公共安全、公共卫生、重大公共利益直接相关的；\n' +
    '\n' +
    ' 4. 与刑事侦查、起诉、审判和判决执行等直接相关的；\n' +
    '\n' +
    '5. 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人授权同意的；\n' +
    '\n' +
    '6. 您自行向社会公众公开的个人信息；\n' +
    '\n' +
    '7. 从合法公开披露的信息中收集个人信息的，包括合法的新闻报道、政府信息公开渠道；\n' +
    '\n' +
    '8. 法律、行政法规规定的其他情形。\n' +
    '\n' +
    '四、我们如何保存与保护您的个人信息\n' +
    '\n' +
    '我们非常重视您个人信息的安全，将努力采取合理的安全措施（包括技术方面和管理方面）来保护您的个人信息，防止您提供的个人信息被不当使用或未经授权的情况下被访问、公开披露、使用、修改、损坏、丢失或泄漏。我们对个人信息的保护，遵循以下规则：\n' +
    '\n' +
    '1. 个人信息的匿名化处理：收集到您的个人信息后，在保障供应商、服务提供商和其他合作伙伴或必要第三方能够凭借相关信息进行货物发送或服务提供的基础上，我们将通过技术手段及时对数据进行匿名化或去标识化处理。您应当理解，匿名化或去标识化后的信息不属于个人信息，在不泄露您个人信息的前提下，公司有权对匿名化或去标识化处理后的用户数据库进行挖掘、分析和利用（包括商业性使用）。\n' +
    '\n' +
    '2. 安全防护措施：我们已使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。例如，我们会使用受信赖的保护机制防止数据遭到恶意攻击；我们会部署访问控制机制，确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。\n' +
    '\n' +
    '3. 及时通知：互联网并非绝对安全的环境，如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。\n' +
    '\n' +
    '我们对个人信息的保存，遵循以下规则：1. 保存期限：您提供的个人信息，将在上文所声明的服务提供过程中持续授权我们使用。在您删除个人信息时，我们将视为您撤回了对于该等个人信息收集、使用或共享的授权和同意。但我们将依据网络安全法等法律规定在您删除后的必要时间内保存您的信息。我们承诺您个人信息的存储时间始终处于合理必要期限内，即不违反法律法规对个人信息保存期限的规定。对于超出前述保存期限的个人信息，我们会进行删除或者匿名化或者去标识化处理，法律法规另有规定的除外。2. 保存地域：原则上，我们在中华人民共和国境内收集和产生的个人信息，将存储在中国境内，但法律法规有明确规定的或单独征得您的授权同意除外。\n' +
    '\n' +
    '五、您对个人信息享有的权利\n' +
    '\n' +
    '按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：（一）更正权\n' +
    '\n' +
    '当您发现我们处理的关于您的个人信息有错误时，经过对您的身份进行验证，且该种更正不影响客观性和准确性的情况下，您有权对错误或者不完整的信息做出更正或者更新。\n' +
    '\n' +
    '（二）删除权\n' +
    '\n' +
    '在以下情形中，您可以向我们提出删除个人信息的请求：1. 如果我们处理个人信息的行为违反法律法规；2. 如果我们收集、使用您的个人信息，却未征得您的同意；3. 如果我们处理个人信息的行为违反了与您的约定；4. 如果您不再或无需使用我们的产品或服务；5. 如果我们不再为您提供产品或服务；当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应的信息，但会在备份更新时删除这些信息。如依据网络安全法等法律规定要求，我们将在您删除后的必要时间内保存您的信息。\n' +
    '\n' +
    '（三）撤回授权\n' +
    '\n' +
    '在必要的情况下，您可依据您自身的需求撤回对我们信息采集使用的授权。当您收回同意后，我们将不再处理相应的个人信息。但您收回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。为实现本第五条所述权利，您可通过本声明第八条“如何联系我们”中所列明的联系方式与我们进行联系，我们在验证主体身份，确认相关更正、删除及撤回授权的要求和理由后，为您进行相应的更正、删除及授权撤回。\n' +
    '\n' +
    '六、我们如何处理未成年人个人信息\n' +
    '\n' +
    '我们的页面和服务主要面向成人。我们不会主动收集未成年人的个人信息，如果您未满18周岁，请您在监护人陪同下仔细阅读并充分理解本声明，并征得监护人的同意后使用我们的服务或向我们提供信息。我们将按照相关法律规定和与您的约定收集、处理并保护您的个人信息。\n' +
    '\n' +
    '如果您或您的监护人认为我们在未经授权的情况下收集、使用了您的个人信息，请您按照本声明中的联系方式联系我们，我们核实后会尽快删除相关个人信息。如果我们发现自己在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，我们会设法尽快删除相关信息。\n' +
    '\n' +
    '对于可能涉及的不满14周岁的儿童个人信息，除按照本声明中其他部分的约定处理外，我们还将采取以下措施予以保障儿童个人信息的安全：（1）我们会严格遵循《儿童个人信息网络保护规定》等相关法律法规对保护儿童个人信息的要求收集、使用儿童个人信息；（2）我们会根据《儿童个人信息网络保护规定》的要求指定专门人员来负责儿童个人信息保护事宜；（3）当您作为监护人为被监护的儿童选择使用我们提供的服务时，我们可能需要向您收集被监护的儿童个人信息，用于向儿童提供我们的服务。您理解并同意，您向我们提供您所监护的儿童个人信息时，即视为您同意我们按照本声明保护您所监护的儿童的个人信息。我们会在征得您授权同意的前提下收集儿童个人信息，并告知您收集的目的和用途。如果您不提供前述信息，您所监护的儿童将无法享受我们提供的相关服务。您作为监护人应当正确履行监护职责，保护儿童个人信息安全，引导、告知儿童在使用我们提供的服务时避免未经您的同意直接向我们提供其个人信息；（4）儿童或其监护人有权随时访问和更正儿童个人信息，还可以向我们提出更正或删除或撤回授权收集、使用或共享儿童个人信息的请求。如您对儿童个人信息相关事宜有任何问题、意见、建议或投诉、举报，请随时通过本声明第八条“如何联系我们”中所列明的联系方式联系我们。\n' +
    '\n' +
    '七、本声明如何更新\n' +
    '\n' +
    '为给您提供更为优质的产品及服务，伴随着我们公司的发展，本声明也会不定期进行更新。但未经您明确授权，我们不会削减您按照本声明所应享有的权利。我们会通过在官方网站、广告落地页面及软件等公司正在运营或进行合作的各类相关产品（如适用）中发出更新版本或以其他方式提醒您相关内容的更新，也请您访问我们网站及软件以便及时了解最新的《个人信息授权与保护声明》。\n' +
    '\n' +
    '对于本声明的重大变更，我们会在网站公告或者其他可能触达您的方式通知您。\n' +
    '\n' +
    '本声明所指的重大变更可能包括：\n' +
    '\n' +
    '1. 我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的收集、使用或共享方式；\n' +
    '\n' +
    '2. 我们在所有权结构、组织架构方面发生重大变化。包括业务调整、破产并购、合并分立、重组等引起的变更；3. 个人信息共享、转让或公开披露的主要对象发生变化；\n' +
    '\n' +
    '4. 您参与个人信息处理方面的权利及其行使方式发生重大变化；\n' +
    '\n' +
    '5. 我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；\n' +
    '\n' +
    '6. 个人信息安全影响评估报告表明存在高风险时。\n' +
    '\n' +
    '八、如何联系我们\n' +
    '\n' +
    `客服电话：${contact}，如果您对本声明有任何疑问、意见或建议，包括您需要对您提交的个人信息进行更正、修改和删除，或是您需要就相关事项进行投诉，可以通过以上方式与我们联系，我们将会在7个工作日内尽快予以联系或回复。\n` +
    '\n' +
    '九、适用法律\n' +
    '\n' +
    '1.本声明适用中华人民共和国法律。\n' +
    '\n' +
    '2.若双方之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，双方在此同意将纠纷或争议提交我方公司归属地人民法院诉讼解决。'
