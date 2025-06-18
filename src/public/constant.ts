const searchParams = new URLSearchParams(window.location.href.split('?')[1] || '');

let InfoData: any = {}

try {
  InfoData = JSON.parse(localStorage.getItem('info') || '{}');
} catch (e) {}

const cst = {
  Info: {
    ...InfoData,
    appKey: searchParams.get('appKey') || InfoData.appKey || '',
    did: searchParams.get('did') || InfoData.did|| '',
  }
}

export default cst;
