document.addEventListener('DOMContentLoaded', function () {
  var ele = document.createElement('style')
  ele.innerHTML = `.account-dropdown-button {display: none !important;}`
  document.head.appendChild(ele)

  initCustomPanel()
})

function initCustomPanel() {
  var panel = document.createElement('div')
  panel.className = 'chrome-plugin-demo-panel'
  panel.innerHTML = `
		<p><a target="_blank" href="https://hinaifei.com/?plugin">嗨奈飞提供</a></p>
		<div class="btn-area">
		    <a target="_blank" href="https://api.hinaifei.com/cookies/tg">TG交流群</a>
		    <a target="_blank" href="https://api.hinaifei.com/cookies/bbs">问题反馈</a>
        <a target="_blank" href="https://www.netflix.com/profiles/">切换车位</a>
		</div>
		<div id="my_custom_log">
		</div>
	`
  document.body.appendChild(panel)
}
