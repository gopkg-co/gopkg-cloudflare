# Gopkg on Cloudflare

Gopkg supports augmentation of websites served through Cloudflare. If you have a website, say, `company.com`, you might want to have vanity Go packages being imported like this:

```go
import "mycompany.com/a"
```

In order to do this, the website must be served through [Cloudflare](https://cloudflare.com). The onboarding process is actually pretty smooth
and they have a free tier.

<img src="https://github.com/gopkg-co/gopkg-cloudflare/blob/main/dns.png" width="100%" border="1">

Once you've transfered your nameserves and DNS records (including all Gopkt **TXT** records) to Cloudflare, you have to ensure
you have correct SSL/TLS setting (*Full*):

<img src="https://github.com/gopkg-co/gopkg-cloudflare/blob/main/https.png" width="100%">

---

Then you have to create a Gopkg worker:

<img src="https://github.com/gopkg-co/gopkg-cloudflare/blob/main/worker-create.png" width="100%">

---

Insert the code from [worker.js](worker.js)

<img src="https://github.com/gopkg-co/gopkg-cloudflare/blob/main/worker-code.png" width="100%">

---

As a final step, you have to associate this worker with a route pattern `*company.com/*`:

<img src="https://github.com/gopkg-co/gopkg-cloudflare/blob/main/workers-route.png" width="100%">

---

Now you should have a working configuration. Your site will be available as it was before and `go get company.com` will be able to fetch packages
referenced in your Gopkg **TXT** records
