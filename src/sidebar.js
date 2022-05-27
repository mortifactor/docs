module.exports = {
  docs: [
    {
      Introduction: [
        'welcome',
        'roots',
        'arch',
        'security'
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          'Using the Ory Console': [
            {
              type: 'autogenerated',
              dirName: 'guides/console'
            },
            'concepts/terminology',
            'concepts/project',
            'concepts/project-invite-membership',
            'concepts/managed-ui',
            'concepts/identity',
            'concepts/services-api',
            'concepts/personal-access-token',
          ]
        },
        {
          'Ory CLI': [
            {
              type: 'autogenerated',
              dirName: 'guides/cli'
            }
          ]
        },
        {
          'Examples': [
            {
              type: 'autogenerated',
              dirName: 'guides/protect-page-login'
            }
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Identity Management',
      items: [
        'identity-overview',
        'kratos/concepts/identity-schema',
        {
          'Managing Identities': [
            'guides/manage-identities/managing-users-identities',
            'guides/manage-identities/import-identity',
            'guides/manage-identities/account-recovery',
            'guides/customize-identity-schema'
          ]
        },
        {
          type: 'category',
          label: 'Social Sign-in',
          items: [
            'guides/social-signin/overview',
            {
              'Integrating Providers': [
                'guides/social-signin/google',
                'guides/social-signin/facebook',
                'guides/social-signin/microsoft',
                'guides/social-signin/github',
                'guides/social-signin/generic',
                'guides/social-signin/apple',
                'guides/social-signin/gitlab',
                'guides/social-signin/auth0',
                'guides/social-signin/slack',
                'guides/social-signin/spotify',
                'guides/social-signin/discord',
                'guides/social-signin/twitch',
                'guides/social-signin/netid',
                'guides/social-signin/yandex',
                'guides/social-signin/vk'
                ]
              }
          ]
        },
        {
          type: 'category',
          label: 'Authentication',
          items: [
            {
            'Methods': [
              'kratos/concepts/credentials',
              'kratos/concepts/credentials/username-email-password',
              'kratos/concepts/credentials/openid-connect-oidc-oauth2',
              'kratos/concepts/credentials/lookup-secrets',
              'kratos/concepts/credentials/totp',
              'kratos/concepts/credentials/webauthn'
            ]
            },
            {
              type: 'category',
              label: 'Multi-Factor Authentication (MFA)',
              items: [
                'guides/mfa/overview',
                'guides/mfa/strict-lax-mfa',
                'guides/mfa/requesting-2fa',
                {
                  type: 'category',
                  label: 'TOTP',
                  items: [
                    'guides/mfa/totp',
                    'guides/mfa/totp-cloud',
                    'guides/mfa/totp-cli',
                    'guides/mfa/totp-selfhosted',
                  ]
                },
                {
                  type: 'category',
                  label: 'WebAuthn',
                  items: [
                    'guides/mfa/webauthn',
                    'guides/mfa/webauthn-cloud',
                    'guides/mfa/webauthn-cli',
                    'guides/mfa/webauthn-selfhosted',
                  ]
                },
                {
                  type: 'category',
                  label: 'Lookup Secrets',
                  items: [
                    'guides/mfa/lookup-secrets-overview',
                    'guides/mfa/lookup-secrets-cloud',
                    'guides/mfa/lookup-secrets-cli',
                    'guides/mfa/lookup-secrets-selfhosted',
                  ]
                },
              ]
            },
            {
              'Passwordless': [
                'guides/passwordless/webauthn'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Self-Service User Flows',
          items: [
            'kratos/self-service',
            'kratos/self-service/flows/user-registration',
            'kratos/self-service/flows/user-login',
            'kratos/self-service/flows/user-settings',
            'kratos/self-service/flows/account-recovery',
            'kratos/self-service/flows/verify-email-account-activation',
            'kratos/self-service/flows/user-logout',
            'kratos/self-service/flows/user-facing-errors',
            'kratos/self-service/flows/2fa-mfa-multi-factor-authentication',
            'kratos/self-service/hooks'
          ]
        },
        {
          type: 'category',
          label: 'Self-Hosting',
          items: [
            'selfhosted-overview',
            'kratos/install',
            'connect-to-cloud',
            'kratos/quickstart',
            'kratos/guides/upgrade',
            {
              type: 'category',
              label: 'Configuration',
              items: [
                'kratos/configuring',
                'kratos/reference/configuration',
                'kratos/reference/configuration-editor',
                'kratos/guides/configuring-cookies',
                'kratos/guides/multi-domain-cookies',
                'kratos/guides/setting-up-cors',
                'kratos/guides/password-policy',
                'kratos/guides/account-recovery-password-reset',
                'kratos/guides/account-activation-email-verification',
                'kratos/guides/zero-trust-iap-proxy-identity-access-proxy',
                'kratos/guides/multi-tenancy-multitenant',
                'kratos/guides/secret-key-rotation',
                'kratos/guides/retrieve-social-sign-in-access-refresh-id-token',
                'kratos/guides/setting-up-noop-cipher-parameters',
                'kratos/guides/setting-up-xchacha-cipher-parameters',
                'kratos/guides/setting-up-aes-cipher-parameters',
                'kratos/guides/high-availability-ha',
                'kratos/guides/docker',
                'kratos/guides/https-tls',
                'kratos/guides/setting-up-password-hashing-parameters',
                'kratos/guides/integration-with-other-systems-using-web-hooks',
                'kratos/guides/tracing',
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'kratos/reference/api',
                'kratos/reference/json-schema-json-paths',
                'kratos/reference/html-forms',
                'kratos/reference/jsonnet',
                {
                  SDKs: ['kratos/sdk/index', 'kratos/sdk/go']
                }
              ]
            },
          ]
        }
   		]
		},
    {
      type: 'category',
      label: 'OAuth2 & OpenID Connect',
      items: [
        'generic-overview',
        {
          type: 'category',
          label: 'OAuth2 Flows',
          items: [
            'hydra/advanced',
            'hydra/guides/openid-connect-dynamic-client-registration',
            'hydra/guides/oauth2-clients',
            'hydra/guides/oauth2-grant-type-jwt-bearer',
            'hydra/guides/common-oauth2-openid-connect-flows',
            'hydra/guides/using-oauth2',
            'hydra/guides/token-expiration',
            'hydra/guides/oauth2-token-introspection',
            'hydra/guides/oauth2-public-spa-mobile',
            'hydra/guides/claims-at-refresh'
          ]
        },
        {
          type: 'category',
          label: 'Implementing User Interface',
          items: [
            'hydra/guides/login',
            'hydra/guides/consent',
            'hydra/guides/logout'
          ]
        },
        {
          type: 'category',
          label: 'Self-Hosting',
          items: [
            'selfhosted-overview',
            'hydra/install',
            'connect-to-cloud',
            'hydra/5min-tutorial',
            'hydra/guides/upgrade',
            {
              type: 'category',
              label: 'Configuration',
              items: [
              'hydra/configure-deploy',
              'hydra/dependencies-environment',
              'hydra/guides/scaling-hydra',
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'hydra/reference/api',
                {
                  SDKs: ['hydra/sdk', 'hydra/sdk/go', 'hydra/sdk/js', 'hydra/sdk/php']
                },
              ]
            }
	        ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Permissions and Access Control',
      items: [
        'generic-overview',
        {
          type: 'category',
          label: 'Role-Based Access Control (RBAC)',
          items: [
            'keto/guides/rbac',
            'keto/guides/access-control-inheritance',
            'keto/guides/access-control-list-design-best-practices',
            'keto/guides/simple-access-check-guide',
            'keto/guides/list-api-display-objects',
          ]
        },
        {
          type: 'category',
          label: 'Relation Tuples',
          items: [
            'keto/concepts/relation-tuples',
            'keto/concepts/namespaces',
            'keto/concepts/objects',
            'keto/concepts/subjects',
            'keto/concepts/graph-of-relations',
          ]
        },
        {
          type: 'category',
          label: 'Self-Hosting',
          items: [
            'selfhosted-overview',
            'connect-to-cloud',
            'kratos/install',
            'kratos/quickstart',
            'kratos/guides/upgrade',
            {
              type: 'category',
              label: 'Configuration',
              items: [
                'keto/secure',
                'keto/guides/expand-api-display-who-has-access',
                'keto/guides/production',
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'keto/reference/rest-api',
                {
                  SDKs: ['keto/sdk/index']
                },
                'keto/reference/configuration',
                'keto/reference/configuration-editor',
                'keto/reference/proto-api',
              ]
            },
          ]
        }
	    ]
    },
    {
      type: 'category',
      label: 'Identity and Access Proxy (IAP)',
      items: [
        'oathkeeper/index',
        {
          type: 'category',
          label: 'Handlers',
          items: [
            'oathkeeper/pipeline',
            'oathkeeper/pipeline/authn',
            'oathkeeper/pipeline/authz',
            'oathkeeper/pipeline/mutator',
            'oathkeeper/pipeline/error'
          ]
        },
        'oathkeeper/api-access-rules',
        {
          type: 'category',
          label: 'Self-Hosting',
          items: [
            'selfhosted-overview',
            'connect-to-cloud',
            'oathkeeper/install',
            'oathkeeper/configure-deploy',
            'oathkeeper/guides/upgrade',
            {
              Configuration: ['oathkeeper/guides/traefik-proxy-integration']
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'oathkeeper/reference/api',
                {
                  SDKs: ['oathkeeper/sdk']
                },
                'oathkeeper/reference/configuration',
                'oathkeeper/reference/configuration-editor',
              ]
            },
          ]
        }
	    ]
    },
  ],
  opensource: [
    'open-source',
    'ecosystem/contributing',
    'ecosystem/community',
    'ecosystem/projects',
    'ecosystem/versioning',
    'ecosystem/configuring',
    'ecosystem/deployment',
    'ecosystem/upgrading',
    'ecosystem/logging',
    'ecosystem/sqa',
    'ecosystem/security',
    'ecosystem/roadmap',
    'ecosystem/software-architecture-philosophy'
  ],
  sdk: [
    {
      type: 'autogenerated',
      dirName: 'sdk'
    },
  ]
};
