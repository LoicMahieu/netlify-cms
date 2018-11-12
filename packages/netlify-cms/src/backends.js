import cms from '@igloo-be/netlify-cms-core/src';
import { GitHubBackend } from '@igloo-be/netlify-cms-backend-github/src';
import { GitLabBackend } from '@igloo-be/netlify-cms-backend-gitlab/src';
import { GitGatewayBackend } from '@igloo-be/netlify-cms-backend-git-gateway/src';
import { BitbucketBackend } from '@igloo-be/netlify-cms-backend-bitbucket/src';
import { TestBackend } from '@igloo-be/netlify-cms-backend-test/src';

const { registerBackend } = cms;

registerBackend('git-gateway', GitGatewayBackend);
registerBackend('github', GitHubBackend);
registerBackend('gitlab', GitLabBackend);
registerBackend('bitbucket', BitbucketBackend);
registerBackend('test-repo', TestBackend);
