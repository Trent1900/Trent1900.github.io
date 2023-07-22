---
title: Stripe Webhook
author: Trent1900
date: 2023-7-8 12:02:00 +1000
categories: [webhook, payment]
tags: [webhook, stripe]
---

### Why Webhook?

- To ensure security, Stripe hosts the payment session, which means our server remains unaware of the payment session's status as it takes place exclusively on the Stripe website. To address this, we can leverage Stripe's webhook to initiate calls to our backend API, allowing us to update our order information accordingly.
- here is the diagram about how webhook is working on our server and frontend.
  ![strip](https://makerkit.dev/assets/images/posts/stripe-checkout-flow.webp)

- Button 组件的话，用 child 比较好。
