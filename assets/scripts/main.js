function initializeFullPageScript() {
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    navigation: false,
    anchors: ['first-screen','portfolio','services','about', 'contacts'],
    navigationTooltips: ['s-1','s-2','s-3','s-4', 's-5'],
  })
}


function activateFullMenu() {
  let $menuButton = document.querySelector('.menu-burger')
  let $body = document.querySelector('body')

  $menuButton.addEventListener('click', () => {
    $body.classList.toggle('active-full-menu')
  })
}


document.addEventListener('DOMContentLoaded', function() {
  initializeFullPageScript()
  activateFullMenu()
})