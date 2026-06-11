# Dadi Staff Guide Portal

This is a ready-to-deploy Next.js website for:

1. Employee Monitoring Tools Guide
2. Parent-Child English Camp Staff Guide

The official website title used in the content is:

**Dadi Monitoring Guide, Parent & Child English Camp Guide Website**

The shorter display name used in the header is:

**Dadi Staff Guide Portal**

## Website Type

This first version is a static internal guide website. It does not need a database yet.

Add a database later only if you need staff login, report submission, checking history, file upload, or online approval workflows.

## Included Pages

- Home
- Monitoring Tools Guide
- JR Checking Guide
- Weekly To-Do List Checking Guide
- Calendar Random Checking Guide
- Work Plan OGSA Checking Guide
- Monthly KPI Checking Guide
- Monthly Work Reflection Checking Guide
- Performance Evaluation Checking Guide
- Goal Link Checking Guide
- Parent-Child English Camp Staff Guide
- Pre-Arrival Communication Checklist
- Airport Reception Procedure
- Transfer Coordination Guide
- Arrival-Day Decision Guide
- Tour Options and Use Cases
- Souvenir Shopping Support Guide
- Currency Exchange Support Guide
- Guest Safety and Service Standards
- Sample Camp Service Flow
- AI Voice Questions
- Templates
- Staff Checking Schedule
- FAQ

## How to Run Locally

Install Node.js first. Then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## How to Deploy to Vercel

1. Upload this folder to a GitHub repository.
2. Go to Vercel.
3. Click **Add New Project**.
4. Import your GitHub repository.
5. Confirm it is detected as a Next.js project.
6. Click **Deploy**.

## Where to Edit Website Content

Most text content is inside:

```text
lib/content.ts
```

Edit this file when you need to update:

- Monitoring tool standards
- Checking requirements
- Camp guide sections
- AI voice questions
- Templates
- FAQ

## Source Documents

Original uploaded Word documents are copied into:

```text
public/resources/source-documents
```

Text extracts are also placed in:

```text
public/resources/source-extracts
```

These can be used as references when updating the website.

## Recommended Next Improvements

- Replace the placeholder SVG with the official Dadi logo.
- Add password protection in Vercel if the website is for internal staff only.
- Add a search bar later if the guide becomes longer.
- Add database and login later only if staff need to submit monitoring results directly on the website.
