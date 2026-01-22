# Top Five AI — Project TODO

## 1. Project Setup
- [X] Initialize Next.js app with TypeScript
- [ ] Configure Tailwind CSS + shadcn/ui
- [ ] Set up ESLint, Prettier
- [ ] Configure environment variables
- [ ] Set up GitHub repository

## 2. Backend & GraphQL
- [ ] Initialize Node.js backend
- [ ] Set up GraphQL server (Apollo Server or GraphQL Yoga)
- [ ] Define GraphQL schema
  - [ ] User
  - [ ] Category
  - [ ] TopFiveItem
- [ ] Implement resolvers
- [ ] Add input validation
- [ ] Add resolver-level authorization

## 3. Database
- [ ] Set up PostgreSQL (AWS RDS)
- [ ] Configure Prisma
- [ ] Create schema models
- [ ] Run migrations
- [ ] Seed development data

## 4. Authentication
- [ ] Configure NextAuth
- [ ] OAuth provider (GitHub or Google)
- [ ] Session-based authorization in GraphQL

## 5. Frontend Core Features
- [ ] Dashboard UI
- [ ] Create/delete categories
- [ ] Add/remove Top 5 items
- [ ] Reorder Top 5 list
- [ ] Empty & loading states
- [ ] Error handling UI

## 6. GraphQL Client
- [ ] Configure Apollo Client
- [ ] Codegen typed queries
- [ ] Loading and error states
- [ ] Optimistic UI updates

## 7. AI Integration
- [ ] OpenAI API setup
- [ ] Server-side AI service
- [ ] AI suggestion from existing Top 5
- [ ] AI prompt-based suggestions
- [ ] Response validation
- [ ] AI loading states
- [ ] Rate-limited AI queries
- [ ] Cache AI responses

## 8. Performance & UX
- [ ] Debounce user prompts
- [ ] Skeleton loaders
- [ ] Drag-and-drop reordering
- [ ] Keyboard accessibility
- [ ] Mobile responsiveness

## 9. Testing
- [ ] Unit tests for resolvers
- [ ] Integration tests for GraphQL
- [ ] Playwright E2E tests
- [ ] Test AI failure cases

## 10. Deployment
- [ ] AWS RDS setup
- [ ] Backend deployment (Lambda + API Gateway)
- [ ] Frontend deployment (Vercel or Amplify)
- [ ] Environment variable configuration

## 11. Stretch Features
- [ ] Shareable public Top 5 links
- [ ] Compare Top 5 lists
- [ ] Version history of lists
- [ ] AI “why this fits you” explanation
- [ ] Activity log
- [ ] Soft deletes / undo