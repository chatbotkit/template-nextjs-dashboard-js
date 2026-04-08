# Dashboard Template for Next.js / ChatBotKit / JS

An analytics dashboard template for monitoring ChatBotKit usage, built with Next.js, Tailwind CSS, and Recharts. Includes Google authentication via NextAuth.

<img width="50%" src="https://github.com/user-attachments/assets/513d499d-fa20-49fc-913f-2a519a1cd25b" />


## Why ChatBotKit?

Building an AI-powered dashboard typically means sourcing models, a conversation layer, background processing, storage, a tested abilities catalogue, authentication, security, monitoring, and more from separate systems. The cost adds up fast - not just in money, but in engineering time.

ChatBotKit brings all of this into one platform. This template gets you started with a dashboard that connects to a single API for viewing analytics, usage trends, and recent activity.

## Technology Stack

| Layer          | Technology           |
| -------------- | -------------------- |
| Framework      | Next.js (App Router) |
| AI Platform    | ChatBotKit SDK       |
| Authentication | NextAuth (Google)    |
| Charts         | Recharts             |
| UI             | Tailwind CSS, Radix  |
| Language       | JavaScript / JSX     |

## Setup

### Automated Setup

```bash
npx create-cbk-app
```

Follow the prompts and configure environment variables (see below).

### Manual Setup

```bash
# Clone the repository
git clone <repo-url>
cd template-nextjs-dashboard-js

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your values (see Environment Variables below)

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to get started.

## Environment Variables

| Variable                | Required | Description                                                                                               |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `CHATBOTKIT_API_SECRET` | Yes      | ChatBotKit API token from [chatbotkit.com/tokens](https://chatbotkit.com/tokens)                          |
| `NEXTAUTH_SECRET`       | Yes      | Random secret for NextAuth session encryption                                                             |
| `NEXTAUTH_URL`          | Yes      | Application URL (default: `http://localhost:3000`)                                                        |
| `GOOGLE_CLIENT_ID`      | Yes      | Google OAuth client ID from [console.cloud.google.com](https://console.cloud.google.com/apis/credentials) |
| `GOOGLE_CLIENT_SECRET`  | Yes      | Google OAuth client secret                                                                                |

### Setting Up ChatBotKit

1. Sign up or log in at [chatbotkit.com](https://chatbotkit.com)
2. Go to [chatbotkit.com/tokens](https://chatbotkit.com/tokens) and create an API token
3. Copy the API token to `CHATBOTKIT_API_SECRET` in your `.env` file

No bots or other platform resources are needed. The dashboard displays usage analytics and event logs for your entire ChatBotKit account.

### Getting Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Set authorized redirect URI to `http://localhost:3000/api/auth/callback/google`
4. Copy the Client ID and Client Secret to your `.env` file

### Generating a NextAuth Secret

Run the following command and paste the output into your `.env` file:

```bash
openssl rand -base64 32
```

## Project Structure

```
├── actions/
│   └── analytics.js          # Server actions for usage and event data
├── app/
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts          # NextAuth API handler
│   ├── auth/signin/
│   │   └── page.jsx          # Google sign-in page
│   ├── dashboard/
│   │   └── page.jsx          # Analytics dashboard page
│   ├── globals.css            # Global styles with CSS variables
│   ├── layout.js              # Root layout with providers
│   └── page.js                # Home (redirects to dashboard or sign-in)
├── components/
│   ├── dashboard/
│   │   ├── dashboard-header.jsx  # Header with user menu
│   │   ├── event-log.jsx         # Recent activity feed
│   │   ├── usage-cards.jsx       # Summary metric cards
│   │   └── usage-charts.jsx      # Time-series line charts
│   ├── ui/                       # Shared UI primitives (button, card, etc.)
│   └── providers.jsx             # NextAuth session provider
├── lib/
│   ├── auth-options.js        # NextAuth configuration
│   ├── chatbotkit.js          # ChatBotKit SDK client
│   ├── session.js             # Session helpers
│   └── utils.js               # Tailwind merge utility
├── middleware.ts              # Route protection
├── .env.example
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

## Learn More

- [ChatBotKit Documentation](https://chatbotkit.com/docs)
- [ChatBotKit SDK](https://github.com/chatbotkit/node-sdk)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT - see [LICENSE](./LICENSE)
