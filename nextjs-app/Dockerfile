# -----------------------------
# 1. Build stage
# -----------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm (built into corepack in Node 20)
RUN corepack enable

# Copy only the manifest files first
COPY package.json pnpm-lock.yaml ./

# Install deps with pnpm
RUN pnpm install --frozen-lockfile

# Now copy the rest of the project *after* installing deps
COPY . .

# Build Next.js
RUN pnpm run build

# -----------------------------
# 2. Runtime stage
# -----------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Enable pnpm
RUN corepack enable

# Copy standalone output and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
