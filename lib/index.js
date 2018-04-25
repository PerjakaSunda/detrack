'use strict'

const deTrack = function () {
  let _deTrack = {
    options: [],
    header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
    dataos: [
      { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
      { name: 'Win', value: 'Win', version: 'NT' },
      { name: 'iPhone', value: 'iPhone', version: 'OS' },
      { name: 'iPad', value: 'iPad', version: 'OS' },
      { name: 'Kindle', value: 'Silk', version: 'Silk' },
      { name: 'Android', value: 'Android', version: 'Android' },
      { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
      { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
      { name: 'Macintosh', value: 'Mac', version: 'OS X' },
      { name: 'Linux', value: 'Linux', version: 'rv' },
      { name: 'Palm', value: 'Palm', version: 'PalmOS' }
    ],
    databrowser: [
      { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
      { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
      { name: 'Safari', value: 'Safari', version: 'Version' },
      { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
      { name: 'Opera', value: 'Opera', version: 'Opera' },
      { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
      { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
    ],
    init: function () {
      let agent = this.header.join(' ')
      let os = this.matchItem(agent, this.dataos)
      let browser = this.matchItem(agent, this.databrowser)
      return { os: os, browser: browser }
    },
    matchItem: function (string, data) {
      let i = 0
      let j = 0
      let html = ''
      let regex
      let regexv
      let match
      let matches
      let version

      for (i = 0; i < data.length; i += 1) {
        regex = new RegExp(data[i].value, 'i')
        match = regex.test(string)
        if (match) {
          regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i')
          matches = string.match(regexv)
          version = ''
          if (matches) {
            if (matches[1]) {
              matches = matches[1]
            }
          }
          if (matches) {
            matches = matches.split(/[._]+/)
            for (j = 0; j < matches.length; j += 1) {
              if (j === 0) {
                version += matches[j] + '.'
              } else {
                version += matches[j]
              }
            }
          } else {
            version = '0'
          }
          return {
            name: data[i].name,
            version: parseFloat(version)
          }
        }
      }
      return { name: 'unknown', version: 0 }
    }
  }
  
  let DeTrackInit = _deTrack.init()

  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight

  let DeTrackBind = {
    os: {
      name: DeTrackInit.os.name,
      version: parseInt(DeTrackInit.os.version)
    },
    browser: {
      name: DeTrackInit.browser.name,
      version: parseInt(DeTrackInit.browser.version)
    },
    screen: {
      width: screenWidth,
      height: screenHeight
    },
    userAgent: navigator.userAgent,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    vendor: navigator.vendor
  }

  return DeTrackBind
}

module.exports = deTrack
