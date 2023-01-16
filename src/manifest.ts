export default {
  manifest_version: 3,
  name: 'Chestr - Universal Shopping Wishlist',
  background: {
    service_worker: 'serviceWorker.ts',
  },
  content_scripts: [
    {
      js: [
        'content/index.ts',
      ],
      matches: [
        'https://*/*',
        'http://*/*',
      ]
    },
  ],
  action: {
    default_popup: 'pages/popup/index.html',
  },
  host_permissions: [
    'https://*/*',
    'http://*/*',
  ],
  permissions: [
    'scripting',
    'activeTab'
  ],
} as chrome.runtime.ManifestV3