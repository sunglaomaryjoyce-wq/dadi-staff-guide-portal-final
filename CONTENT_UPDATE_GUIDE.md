# Content Update Guide

Most website content is stored in:

```text
lib/content.ts
```

## To Add a New Monitoring Tool

1. Open `lib/content.ts`.
2. Find `monitoringGuides`.
3. Copy one existing item.
4. Change the following fields:
   - slug
   - title
   - eyebrow
   - summary
   - owner
   - checker
   - frequency
   - deadline
   - purpose
   - checklist
   - standards
   - commonMistakes
   - sampleRemark

The page will automatically appear on the Monitoring Tools overview page.

## To Add a New Parent-Child Camp Guide

1. Open `lib/content.ts`.
2. Find `campGuides`.
3. Copy one existing item.
4. Update the content.

The page will automatically appear on the Parent-Child Camp overview page.

## To Update AI Voice Questions

1. Open `lib/content.ts`.
2. Find `aiVoiceQuestions`.
3. Add, remove, or edit questions under each category.

## To Update Templates

1. Open `lib/content.ts`.
2. Find `templates`.
3. Edit the template title or content.

## To Update FAQ

1. Open `lib/content.ts`.
2. Find `faqs`.
3. Add or revise Q&A entries.
