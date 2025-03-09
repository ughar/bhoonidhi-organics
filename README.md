# Bhoonidhi Organics - A2 Cowdung Vermicompost

A modern website for Bhoonidhi Organics showcasing premium A2 cowdung vermicompost products. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/bhoonidhi-organics.git

# Navigate to project directory
cd bhoonidhi-organics

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

## 🌐 Deployment Instructions

### 1. Vercel (Recommended)

The easiest way to deploy this Next.js application is using Vercel, the platform created by the creators of Next.js.

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy:
   ```bash
   vercel
   ```

### 2. AWS Amplify

1. Create an AWS account if you don't have one
2. Install AWS Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```
3. Initialize Amplify in your project:
   ```bash
   amplify init
   ```
4. Push to AWS:
   ```bash
   amplify push
   ```
5. Deploy:
   ```bash
   amplify publish
   ```

### 3. DigitalOcean App Platform

1. Create a DigitalOcean account
2. Install doctl:
   ```bash
   brew install doctl # For macOS
   ```
3. Create app:
   ```bash
   doctl apps create --spec .do/app.yaml
   ```

### 4. Traditional VPS (e.g., DigitalOcean, Linode, AWS EC2)

1. Build the application:
   ```bash
   npm run build
   ```

2. Install PM2:
   ```bash
   npm install -g pm2
   ```

3. Create ecosystem.config.js:
   ```javascript
   module.exports = {
     apps: [{
       name: 'bhoonidhi-organics',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production'
       }
     }]
   }
   ```

4. Start the application:
   ```bash
   pm2 start ecosystem.config.js
   ```

5. Setup Nginx as reverse proxy:
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## 📦 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# API Keys (if needed)
NEXT_PUBLIC_API_KEY=your_api_key
```

## 🔒 Security Considerations

1. Enable HTTPS
2. Set up proper CSP headers
3. Configure rate limiting
4. Enable CORS appropriately
5. Keep dependencies updated

## 🛠 Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Zod (Form Validation)

## 📱 Features

- Responsive design
- SEO optimized
- A2 Cowdung Vermicompost products showcase
- Contact form with validation
- Security headers implementation
- Performance optimized

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📄 License

MIT License - feel free to use this code for your own projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, you can reach us through:

**Visit Us:**  
Bhoonidhi Organics  
Gulgunjan halli, Halubhavipalya  
Bengaluru, Karnataka 562130  

**Contact:**  
- Email: thebhoonidhiorganics@gmail.com
- Phone: +919901977988
- GitHub: Create an issue in this repository

## 🔄 Updates

To update the application:

```bash
# Pull latest changes
git pull

# Install dependencies
npm install

# Build application
npm run build

# Restart application (if using PM2)
pm2 restart bhoonidhi-organics
```
