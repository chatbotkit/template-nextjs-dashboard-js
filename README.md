# Dashboard Template for Next.js / ChatBotKit / JS

A starter dashboard template for managing ChatBotKit resources, built with Next.js and Tailwind CSS.

## Why ChatBotKit?

Building an AI-powered dashboard typically means sourcing models, a conversation layer, background processing, storage, a tested abilities catalogue, authentication, security, monitoring, and more from separate systems. The cost adds up fast - not just in money, but in engineering time.

ChatBotKit brings all of this into one platform. This template gets you started with a dashboard that connects to a single API for managing your bots, conversations, and other resources.

## Technology Stack

| Layer       | Technology           |
| ----------- | -------------------- |
| Framework   | Next.js (App Router) |
| AI Platform | ChatBotKit SDK       |
| UI          | Tailwind CSS         |
| Language    | JavaScript / JSX     |

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

| Variable                | Required | Description                                                                      |
| ----------------------- | -------- | -------------------------------------------------------------------------------- |
| `CHATBOTKIT_API_SECRET` | Yes      | ChatBotKit API token from [chatbotkit.com/tokens](https://chatbotkit.com/tokens) |

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── .env.example          # Environment variable template
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json
```

## Learn More

- [ChatBotKit Documentation](https://chatbotkit.com/docs)
- [ChatBotKit SDK](https://github.com/chatbotkit/node-sdk)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT - see [LICENSE](./LICENSE)
