#!/bin/bash
# Call this after merging to main to trigger a Netlify redeploy
curl -s -X POST "https://api.netlify.com/build_hooks/6a46da4ff961b900cbb99188"
echo "Deploy triggered → https://pulse-crm-faq.netlify.app"
