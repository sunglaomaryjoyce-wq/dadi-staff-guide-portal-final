# Website File Inventory

## Main Project Files

| File | Purpose |
|---|---|
| package.json | Defines project scripts and dependencies. |
| next.config.mjs | Next.js configuration file. |
| tsconfig.json | TypeScript configuration. |
| .gitignore | Prevents node_modules, build files, and environment files from being uploaded. |
| README.md | Main setup and deployment guide. |

## App Pages

| Folder / File | Page |
|---|---|
| app/page.tsx | Homepage |
| app/monitoring-tools/page.tsx | Monitoring tools overview |
| app/monitoring-tools/[slug]/page.tsx | Individual monitoring guide pages |
| app/parent-child-camp/page.tsx | Parent-Child English Camp guide overview |
| app/parent-child-camp/[slug]/page.tsx | Individual camp guide pages |
| app/ai-voice-questions/page.tsx | AI voice question list |
| app/templates/page.tsx | Copy-ready templates |
| app/checking-schedule/page.tsx | Staff checking schedule |
| app/faq/page.tsx | Frequently asked questions |

## Content File

| File | Purpose |
|---|---|
| lib/content.ts | Central editable content database for the static website. |

## Components

| File | Purpose |
|---|---|
| components/Header.tsx | Website header and navigation. |
| components/Footer.tsx | Website footer. |
| components/SectionCard.tsx | Reusable card for page links. |
| components/ListBlock.tsx | Reusable checklist block. |
| components/MetaGrid.tsx | Reusable metadata grid for owner, checker, frequency, deadline. |

## Styling

| File | Purpose |
|---|---|
| app/globals.css | Dadi green, orange, and white visual style. |

## Resources

| Folder | Purpose |
|---|---|
| public/resources/source-documents | Original uploaded Word files. |
| public/resources/source-extracts | Plain-text extracts of uploaded Word files. |
