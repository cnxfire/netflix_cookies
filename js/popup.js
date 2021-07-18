;(function () {
  $('#open').click(function () {
    let input = document.getElementById('token')
    let token = input.value
    if (token.length != 10) {
      alert('请输入正确的激活码')
      return false
    }

    $.get('https://api.hinaifei.cn/getCookies?token' + token, function (res) {
      if (res.code !== 0) {
        alert(res.msg)
        return false
      }

      setCookies(res['cookies'])
    })
  })

  $('#tg').click(() => {
    chrome.tabs.create({ url: 'https://t.me/hinaifei' })
  })

  $('#out').click(() => {
    chrome.tabs.create({ url: 'https://www.netflix.com/clearcookies' })
  })

  $('#hinaifei').click(() => {
    chrome.tabs.create({ url: 'https://hinaifei.com' })
  })

  $('#pp').click(() => {
    chrome.tabs.create({ url: 'https://ppis.me' })
  })
  $('#db').click(() => {
    chrome.tabs.create({ url: 'https://t.me/hinaifei' })
  })
})()

function setCookies(obj) {
  obj.forEach(function (item) {
    let params = {
      url: 'https://www.netflix.com/',
      domain: item.domain,
      expirationDate: item.expirationDate,
      name: item.name,
      path: item.path,
      sameSite: item.sameSite,
      secure: item.secure,
      value: item.value,
    }
    console.log(params)

    chrome.cookies.set(params, function (cookie) {})
  })

  chrome.tabs.create({ url: 'https://netflix.com/' })
}

chrome.cookies.onChanged.addListener((changeInfo) => {})
