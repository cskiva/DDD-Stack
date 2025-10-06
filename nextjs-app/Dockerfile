# -----------------------------
# 1. Build stage
# -----------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN corepack enable

# Copy files needed for dependency install
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy rest of project
COPY . .

# Build the Next.js app
RUN pnpm run build

# -----------------------------
# 2. Runtime stage
# -----------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Enable pnpm for runtime as well
RUN corepack enable

# Copy standalone output & public assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
