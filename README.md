# todo-app

Next.js(v15.1.7) + Clerk + Bun(v1.2.2)

## run dev server

```zsh
bun install
bun dev
```

## Claude GitHub Integration (via AWS Bedrock)

This repository is configured to work with Claude through GitHub comments using AWS Bedrock. You can mention `@claude` in pull request comments to trigger Claude to make changes.

### Setup

To enable Claude integration via AWS Bedrock, you need to add the following secrets to your GitHub repository:

1. **AWS_ACCESS_KEY_ID**: Your AWS Access Key ID
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AWS_ACCESS_KEY_ID`

2. **AWS_SECRET_ACCESS_KEY**: Your AWS Secret Access Key
   - Name: `AWS_SECRET_ACCESS_KEY`

3. **AWS_REGION**: AWS region where Bedrock is available (e.g., `us-east-1`)
   - Name: `AWS_REGION`
   - Common regions with Bedrock: `us-east-1`, `us-west-2`, `ap-northeast-1`

### AWS IAM Permissions

Your AWS user/role needs the following permissions for Bedrock:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": [
        "arn:aws:bedrock:*::foundation-model/anthropic.claude-3-5-sonnet-20241022-v2:0"
      ]
    }
  ]
}
```

### Usage

In any pull request, you can mention Claude in a comment:

```
@claude fix the TypeScript errors in this file
```

```
@claude add error handling to the todo creation function
```

Claude will:
1. Read your comment and understand the requested changes
2. Make the necessary code modifications
3. Commit the changes to the PR branch
4. Post a response comment with what was done