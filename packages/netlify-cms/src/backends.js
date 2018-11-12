import cms from '@igloo-be/netlify-cms-core';
import { GitHubBackend } from '@igloo-be/netlify-cms-backend-github';
import { GitLabBackend } from '@igloo-be/netlify-cms-backend-gitlab';
import { GitGatewayBackend } from '@igloo-be/netlify-cms-backend-git-gateway';
import { BitbucketBackend } from '@igloo-be/netlify-cms-backend-bitbucket';
import { TestBackend } from '@igloo-be/netlify-cms-backend-test';

const { registerBackend } = cms;

registerBackend('git-gateway', GitGatewayBackend);
registerBackend('github', GitHubBackend);
registerBackend('gitlab', GitLabBackend);
registerBackend('bitbucket', BitbucketBackend);
registerBackend('test-repo', TestBackend);
