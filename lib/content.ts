
export type GuideItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  owner: string;
  checker: string;
  frequency: string;
  deadline: string;
  purpose: string;
  checklist: string[];
  standards: string[];
  commonMistakes: string[];
  sampleRemark: string;
};

export type CampItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  purpose: string;
  checklist: string[];
  standards: string[];
  staffReminder: string;
};

export const site = {
  name: "Dadi Monitoring Guide, Parent & Child English Camp Guide Website",
  shortName: "Dadi Staff Guide Portal",
  description:
    "Internal staff guide for employee monitoring tools and Parent-Child English Camp coordination.",
  disclaimer: "Internal Use Only | Dadi Coach Corporation Staff Guide Material",
};

export const quickStats = [
  { label: "Guide Areas", value: "2", note: "Monitoring + Camp" },
  { label: "Monitoring Tools", value: "8", note: "JR, To-Do, Calendar, Work Plan, KPI, Reflection, Evaluation, Goal Link" },
  { label: "Camp Operations", value: "9", note: "Pre-arrival to final departure" },
  { label: "First Version", value: "Static", note: "No database required yet" },
];

export const monitoringGuides: GuideItem[] = [
  {
    slug: "jr",
    title: "Job Responsibility (JR) Checking Guide",
    eyebrow: "Monthly Monitoring",
    summary: "Check whether each department JR is updated, complete, aligned with HR records, and properly uploaded.",
    owner: "Department OIC",
    checker: "Monitoring Staff / Mary Joyce",
    frequency: "Monthly, with immediate updates for resignations or new hires",
    deadline: "OIC uploads by the 31st; monitoring check on the 1st",
    purpose: "To make sure every department has one updated JR that reflects current employees, resigned employees, and division of labor.",
    checklist: [
      "Confirm that one JR exists for the entire department.",
      "Check the latest update date of the JR.",
      "Compare the employee count with the updated HR employee list.",
      "Check whether resigned employees are still listed and highlighted in grey.",
      "Check whether new hires are already added.",
      "Review whether the division of labor is clear and aligned with HR information.",
      "Verify that the latest JR was uploaded to WeDrive.",
    ],
    standards: [
      "The JR must be updated once a month.",
      "The JR must be uploaded by the 31st of each month.",
      "Resigned employees must not be deleted; they must be highlighted in grey.",
      "Special changes, such as resignation or new hires, must be updated promptly.",
    ],
    commonMistakes: [
      "Old JR date still displayed.",
      "Resigned employee removed instead of highlighted grey.",
      "New employee not added.",
      "Employee count does not match HR data.",
      "Division of labor is unclear or outdated.",
    ],
    sampleRemark:
      "JR checked. Latest date confirmed. Employee count matches HR list. Resigned employee retained and highlighted in grey. Division of labor is clear.",
  },
  {
    slug: "weekly-to-do-list",
    title: "Weekly To-Do List Checking Guide",
    eyebrow: "Daily + Weekly Monitoring",
    summary: "Check whether employees update task progress, remarks, and completion dates properly.",
    owner: "OICs and Members",
    checker: "OICs every Friday afternoon; monitoring staff may review compliance",
    frequency: "Daily updates, Friday morning member update, Friday afternoon OIC check",
    deadline: "Every Friday afternoon for OIC checking",
    purpose: "To ensure weekly tasks are properly listed, updated, tracked, and followed up by OICs.",
    checklist: [
      "Check if weekly tasks are listed in Smartsheet.",
      "Check if members update progress daily.",
      "Check if completed tasks include the date of accomplishment.",
      "Check if remarks are clear and useful.",
      "Verify if all members reviewed or updated their list on Friday morning.",
      "Verify if OICs checked members lists on Friday afternoon.",
      "Check whether OICs notified members who did not update.",
    ],
    standards: [
      "OICs list assigned weekly tasks every Friday.",
      "OICs send the Weekly To-Do List to the group chat every Monday.",
      "OICs and members update progress and remarks.",
      "Completed tasks should include date of accomplishment.",
    ],
    commonMistakes: [
      "Progress column is blank.",
      "Completed task has no accomplishment date.",
      "Remarks are too vague, such as 'done' only.",
      "Task status is not updated.",
      "OIC did not check member updates on Friday afternoon.",
    ],
    sampleRemark:
      "Weekly To-Do List reviewed. Most tasks include progress and remarks. Two completed tasks need accomplishment dates. OIC should remind the members today.",
  },
  {
    slug: "calendar",
    title: "Working Calendar Random Checking Guide",
    eyebrow: "Daily Input + Weekly OIC Check + Monthly Random Check",
    summary: "Randomly check employee calendars to confirm that work schedules and updates are current.",
    owner: "Employees; OICs for weekly review",
    checker: "OICs every Friday; monitoring staff monthly random check",
    frequency: "Employees update daily; OICs check weekly; monitoring staff checks monthly",
    deadline: "Every Friday for OIC review; once per month for random monitoring check",
    purpose: "To confirm that employees are keeping calendars updated and that OICs are regularly checking member calendars.",
    checklist: [
      "Randomly choose 1 to 2 employees per department.",
      "Check whether calendar entries are updated daily.",
      "Check whether tasks, meetings, and activities are specific enough.",
      "Check whether the calendar reflects actual work schedule.",
      "Check whether OIC comments or reviews are visible weekly.",
      "Record the checked employee name, department, date checked, and findings.",
    ],
    standards: [
      "Employees fill out calendars daily.",
      "Department OICs review and comment weekly.",
      "Monitoring staff conducts random check once a month.",
      "For each department, checking 1 to 2 employees is recommended.",
    ],
    commonMistakes: [
      "Calendar is blank for several days.",
      "Only general wording is used, such as 'work' or 'task'.",
      "No OIC comment or checking evidence.",
      "Calendar does not match known work assignments.",
    ],
    sampleRemark:
      "Calendar randomly checked for two employees. Employee A is updated daily. Employee B has missing entries for two days. OIC should remind and review by Friday.",
  },
  {
    slug: "work-plan",
    title: "Work Plan OGSA Checking Guide",
    eyebrow: "Project and Task Planning Standard",
    summary: "Check whether each work plan follows OGSA and remains specific, realistic, and limited to 1 to 2 pages.",
    owner: "Employee drafting the work plan; OIC reviewing it",
    checker: "Department OIC first; Mary Joyce / monitoring staff for monthly review",
    frequency: "For every new task or project; monthly review by the 1st",
    deadline: "Uploaded by the 1st; monitoring check by the 5th",
    purpose: "To ensure work plans are clear, actionable, connected to business goals, and easy to monitor.",
    checklist: [
      "Check if the work plan follows OGSA: Objectives, Goals, Strategies, Action Plan.",
      "Check if objectives are qualitative and descriptive.",
      "Check if goals are quantitative and include targets, numbers, output, income, or measurable results.",
      "Check if strategies connect directly to the objectives and goals.",
      "Check if strategies are arranged by stages, phases, steps, or methods when possible.",
      "Check if the action plan is feasible, realistic, and time-bound.",
      "Check if the whole work plan is only 1 to 2 pages.",
      "Check if the latest version replaced the old version in WeDrive.",
    ],
    standards: [
      "Objectives = qualitative and descriptive.",
      "Goals = quantitative and measurable.",
      "Strategies = connected to objectives and goals.",
      "Action Plan = feasible, realistic, and includes timetable.",
      "Length must be 1 to 2 pages only.",
    ],
    commonMistakes: [
      "Objective is written like a numerical target.",
      "Goal has no numbers or measurable output.",
      "Strategy is too general and not connected to the goal.",
      "Action plan has no timetable.",
      "Plan is too long and not direct to the point.",
    ],
    sampleRemark:
      "Work Plan follows OGSA. Objectives are clear. Goals need more measurable targets. Strategies are aligned, but action plan should include exact dates and responsible person.",
  },
  {
    slug: "monthly-kpi",
    title: "Monthly KPI Calculation Checking Guide",
    eyebrow: "Monthly Performance Data Format",
    summary: "Check whether monthly KPI entries show total data, monthly increase, and N/A or slash when no data exists.",
    owner: "Each employee; OIC consolidates department KPI",
    checker: "Department OIC; Mary Joyce sends consolidated report to COO and GM",
    frequency: "Monthly",
    deadline: "Employee submits by the 5th; OIC reviews and consolidates after submission",
    purpose: "To make KPI data clear, comparable, and correct across months.",
    checklist: [
      "Check if each employee submitted one KPI form.",
      "Check if numbers use cumulative total plus monthly increase format.",
      "Check if blank data uses N/A or slash.",
      "Check if February total includes January total plus February new data.",
      "Check if resigned employees are still listed and highlighted in grey.",
      "Check if OIC consolidated all employee KPI records into one document.",
    ],
    standards: [
      "January example: 20.",
      "If February has 10 new records, February should be 30 (+10).",
      "30 means the total from January to February.",
      "(+10) means new added data for February.",
      "If there is no data, use N/A or /.",
    ],
    commonMistakes: [
      "Only new monthly data is written, but total is missing.",
      "Total number is shown without monthly increase.",
      "Blank cells are left empty instead of N/A or slash.",
      "The calculation does not continue from the previous month.",
    ],
    sampleRemark:
      "KPI checked. February should be written as 30 (+10), not only 10. Blank cells should use N/A or /. Please revise before consolidation.",
  },
  {
    slug: "monthly-work-reflection",
    title: "Monthly Work Reflection Checking Guide",
    eyebrow: "Monthly Reflection Standard",
    summary: "Check whether employee reflections are specific, concise, and submitted to the OIC by the deadline.",
    owner: "Each employee",
    checker: "Department OIC; Mary Joyce forwards to COO and GM",
    frequency: "Monthly",
    deadline: "By the 5th of each month",
    purpose: "To help employees reflect on completed work, issues, improvements, and next steps clearly.",
    checklist: [
      "Check if every employee submitted a reflection.",
      "Check if the reflection is one page only.",
      "Check if the content is specific and not generic.",
      "Check if the reflection includes work output, problems, improvement ideas, and next actions.",
      "Check if the OIC reviewed and gave improvement suggestions.",
      "Check if Mary Joyce received the final version for sending to COO and GM.",
    ],
    standards: [
      "Monthly reflection must be one page.",
      "Content must be specific and clear.",
      "OIC must review and suggest improvements.",
    ],
    commonMistakes: [
      "Reflection is too general.",
      "No specific work results are mentioned.",
      "No improvement actions are included.",
      "Reflection is too long or not organized.",
    ],
    sampleRemark:
      "Reflection submitted on time and within one page. Please add more specific work output and clearer improvement actions for next month.",
  },
  {
    slug: "performance-evaluation",
    title: "Performance Evaluation Checking Guide",
    eyebrow: "Quarterly Evaluation Schedule",
    summary: "Check whether quarterly evaluation forms and meetings are completed based on the correct assessment period.",
    owner: "Department OIC / Evaluation responsible personnel",
    checker: "Monitoring staff / Mary Joyce",
    frequency: "Four times per year",
    deadline: "April 10, July 10, October 10, and January 10",
    purpose: "To ensure quarterly performance evaluations are completed on schedule and based on the correct months.",
    checklist: [
      "Check if the first evaluation covers January to March and is completed by April 10.",
      "Check if the second evaluation covers April to June and is completed by July 10.",
      "Check if the third evaluation covers July to September and is completed by October 10.",
      "Check if the fourth evaluation covers October to December and is completed by January 10.",
      "Check whether required forms and one-on-one meetings are completed when applicable.",
    ],
    standards: [
      "First Evaluation: January, February, March; completed by April 10.",
      "Second Evaluation: April, May, June; completed by July 10.",
      "Third Evaluation: July, August, September; completed by October 10.",
      "Fourth Evaluation: October, November, December; completed by January 10.",
    ],
    commonMistakes: [
      "Wrong months included in the evaluation period.",
      "Deadline missed.",
      "Form completed but meeting not conducted when required.",
      "Incomplete evaluation files.",
    ],
    sampleRemark:
      "Second quarter performance evaluation reviewed. Forms are complete. Please confirm if one-on-one meeting documentation has been uploaded.",
  },
  {
    slug: "goal-link",
    title: "Goal Link Checking Guide",
    eyebrow: "Weekly Progress Tracking",
    summary: "Check whether project leaders and related personnel update progress every Friday and whether Monday checking is completed.",
    owner: "Project leaders and related personnel",
    checker: "Mary Joyce / monitoring staff",
    frequency: "Weekly",
    deadline: "Friday progress update; Monday monitoring check",
    purpose: "To track project and business goal progress through a shared link once the goal link is created.",
    checklist: [
      "Check if relevant personnel update the goal link based on business needs.",
      "Check if project leaders update progress every Friday.",
      "Check if related personnel update progress every Friday.",
      "Check if Mary Joyce or monitoring staff checks updates every Monday.",
      "Check if progress notes are specific enough to understand the current status.",
    ],
    standards: [
      "Goal link starts after creation.",
      "Project leaders update progress every Friday.",
      "Related personnel update every Friday.",
      "Monitoring check is every Monday.",
    ],
    commonMistakes: [
      "Progress is not updated by Friday.",
      "Update is too vague.",
      "Related person did not update their part.",
      "Monday checking record is missing.",
    ],
    sampleRemark:
      "Goal Link reviewed. Project leader update is complete. Two related personnel need clearer progress notes before Monday review is closed.",
  },
];

export const campGuides: CampItem[] = [
  {
    slug: "pre-arrival",
    title: "Pre-Arrival Communication Checklist",
    eyebrow: "Before Guest Arrival",
    summary: "Prepare and send complete guest materials before parents and children travel to the Philippines.",
    purpose: "To reduce guest uncertainty and make families feel guided before arrival.",
    checklist: [
      "Send welcome letter 7 to 14 days before arrival.",
      "Send full itinerary 7 to 14 days before arrival.",
      "Send packing list 7 to 10 days before arrival.",
      "Send airport arrival guide 3 to 5 days before arrival.",
      "Send currency exchange guide 3 to 5 days before arrival.",
      "Send souvenir guide during pre-arrival briefing.",
      "Send emergency contact list 3 to 5 days before arrival.",
      "Send camp rules and reminders before departure.",
    ],
    standards: [
      "All materials must be clear, family-friendly, and easy to understand.",
      "The parent should know the pickup area, contact person, and first-day plan before arrival.",
      "Emergency contacts must be accessible to both guests and internal staff.",
    ],
    staffReminder: "Pre-arrival communication affects guest confidence before the camp officially starts.",
  },
  {
    slug: "airport-reception",
    title: "Airport Reception Procedure",
    eyebrow: "Arrival Day",
    summary: "Standardize the airport welcome, headcount, luggage assistance, and first-day briefing process.",
    purpose: "To make guests feel safe, received, and properly guided from the airport.",
    checklist: [
      "Monitor flight status before leaving for the airport.",
      "Arrive early and prepare visible welcome signage.",
      "Confirm guest name list and number of expected parents and children.",
      "Greet guests warmly and introduce the coordinator team.",
      "Assist with luggage and guide families to the waiting area.",
      "Conduct a quick headcount before leaving the airport.",
      "Provide bottled water and simple arrival reminders.",
      "Explain the first-day itinerary before moving to the vehicle.",
      "Coordinate with the driver and confirm the route.",
      "Send an arrival update to the internal group after airport departure.",
    ],
    standards: [
      "The welcome should be organized, calm, friendly, and reassuring.",
      "The camp experience begins at airport pickup.",
      "Headcount must be confirmed before departure.",
    ],
    staffReminder: "Parents with young children need calm coordination, clear instructions, and visible staff support.",
  },
  {
    slug: "transfer-guide",
    title: "Transfer Coordination Guide",
    eyebrow: "Manila to Clark / Local Movement",
    summary: "Prepare transportation details, guest headcount, emergency contacts, hotel address, and child-friendly travel support.",
    purpose: "To prevent delays, confusion, missing guests, and safety issues during transfer.",
    checklist: [
      "Confirm guest name list and headcount.",
      "Monitor flight details and delays.",
      "Confirm driver contact and vehicle plate number.",
      "Confirm hotel name and full address.",
      "Prepare emergency contact numbers.",
      "Prepare bottled water and child-friendly snacks.",
      "Prepare wet wipes, tissue, and garbage bags.",
      "Send printed or digital itinerary to parents and staff.",
      "Prepare backup route or stop option.",
    ],
    standards: [
      "Private transport is preferred for organized parent-child groups.",
      "Guests should stay together with coordinators.",
      "Route and vehicle details must be shared internally before pickup.",
    ],
    staffReminder: "Transportation is part of the guest service experience, not only movement from one place to another.",
  },
  {
    slug: "arrival-day-decision",
    title: "Arrival-Day Decision Guide",
    eyebrow: "Tour or Direct Transfer Decision",
    summary: "Choose the best arrival-day plan depending on flight time, child condition, weather, traffic, and guest type.",
    purpose: "To avoid tiring children and to keep the first day smooth, safe, and manageable.",
    checklist: [
      "Morning arrival and guests are not tired: consider light Manila tour or SM Mall of Asia stop.",
      "Morning arrival but young children are tired: choose lunch/rest stop, then transfer to Clark.",
      "Afternoon arrival: go directly to Clark after quick meal or comfort stop.",
      "Evening arrival: go directly to hotel in Clark and move orientation to the next day.",
      "Delayed flight: reduce tour activities and prioritize check-in/rest.",
      "Heavy rain or severe traffic: avoid outdoor tour and use indoor mall stop or direct transfer.",
      "VIP school owners or partner guests: offer a short polished cultural option if arrival time allows.",
    ],
    standards: [
      "For most parent-child groups, use SM Mall of Asia plus rest and direct transfer to Clark.",
      "Avoid overloading the first day.",
      "Child comfort must be prioritized over sightseeing volume.",
    ],
    staffReminder: "A simple first day is often better than a packed first day for families with young children.",
  },
  {
    slug: "tour-options",
    title: "Tour Options and Use Cases",
    eyebrow: "Manila / Clark Activity Planning",
    summary: "Select the proper tour option based on group condition and parent-child needs.",
    purpose: "To match the activity with the guest profile and avoid unnecessary fatigue.",
    checklist: [
      "SM Mall of Asia: best for most parent-child groups needing food, restroom, rest, shopping, and Manila Bay photos.",
      "Intramuros / Fort Santiago: best for parents interested in Philippine culture; limit walking time.",
      "Manila Ocean Park: best for younger children and indoor educational activity preference.",
      "Direct to Clark: best for afternoon/evening arrivals or tired families.",
    ],
    standards: [
      "Check operating hours and ticket arrangements before final implementation.",
      "Prepare water, umbrellas, and clear meeting points for walking tours.",
      "Always have a backup itinerary for weather and traffic changes.",
    ],
    staffReminder: "Do not promise exact travel times, rates, or operating hours without checking during the week of the visit.",
  },
  {
    slug: "souvenir-guide",
    title: "Souvenir Shopping Support Guide",
    eyebrow: "Guest Shopping Support",
    summary: "Guide families toward safe, meaningful, sealed, and easy-to-pack souvenirs.",
    purpose: "To help parents buy appropriate items and avoid customs, baggage, or packing problems.",
    checklist: [
      "Arrival day: keep shopping light and time-limited if guests are not tired.",
      "Mid-camp: use SM City Clark or Kultura Filipino for main shopping.",
      "Final day: support last-minute shopping at SM City Clark or Clark Airport shops.",
      "Recommend food souvenirs such as dried mangoes, banana chips, polvoron, chocolates, and San Nicolas cookies.",
      "Recommend child-friendly items such as keychains, magnets, shirts, postcards, and storybooks.",
      "Recommend premium gifts such as pearl accessories, woven bags, and local crafts for VIP parents or partners.",
      "Remind guests about luggage weight and customs rules before departure.",
    ],
    standards: [
      "Recommend sealed and properly labeled food items.",
      "Avoid fresh fruits, fresh meat, seafood, homemade wet food, large liquids, strong-smelling food, and fragile jars.",
      "Shopping should be planned as part of the guest experience, not left until the last minute.",
    ],
    staffReminder: "Parents often appreciate souvenir guidance because they may not know which items are safe to bring home.",
  },
  {
    slug: "currency-exchange",
    title: "Currency Exchange Support Guide",
    eyebrow: "Money Exchange Assistance",
    summary: "Guide guests to safe, recognizable, and convenient exchange options while avoiding informal sources.",
    purpose: "To help guests prepare cash safely and understand basic exchange precautions.",
    checklist: [
      "Ask guests if they already have Philippine peso cash for immediate expenses.",
      "Recommend exchanging only a small amount at the airport if needed.",
      "For larger exchanges, guide guests to SM City Clark, bank services, or recognized exchange providers.",
      "Remind guests to prepare passport or valid ID if required.",
      "Ask guests to check the displayed rate before exchanging.",
      "Remind guests to count the cash before leaving the counter.",
      "Advise guests to keep the exchange receipt.",
      "Do not personally handle large amounts of guest cash unless necessary for safety and with transparent counting.",
    ],
    standards: [
      "Check counter operating hours before bringing guests.",
      "Check accepted currencies and daily transaction limits.",
      "Rates change regularly, so verify current rate before implementation.",
      "Avoid informal exchange sources.",
    ],
    staffReminder: "For larger exchanges, use recognized mall, bank, or formal exchange services after hotel check-in.",
  },
  {
    slug: "safety-service",
    title: "Guest Safety and Service Standards",
    eyebrow: "Coordinator Standard",
    summary: "Keep every activity aligned with child comfort, parent confidence, and program value.",
    purpose: "To maintain a safe, organized, educational, and memorable guest journey.",
    checklist: [
      "Remind guests to keep passports safe.",
      "Remind guests to carry small peso cash.",
      "Remind guests to stay with the group.",
      "Remind guests to drink bottled water and wear comfortable clothing.",
      "Ask parents to prepare child medicine for fever, allergies, stomach issues, or motion sickness.",
      "Remind guests to follow baggage and customs rules.",
      "For coordinators: confirm flight status, prepare signage, assign child-friendly staff, prepare emergency kit, confirm transportation, check restaurant capacity, prepare backup itinerary, and monitor child comfort.",
    ],
    standards: [
      "Every activity should support child comfort, parent confidence, and program value.",
      "The guest journey should feel safe, organized, educational, and memorable.",
      "When parents feel supported and children feel comfortable, the camp is easier to promote and recommend.",
    ],
    staffReminder: "The camp is not only English classes; it is the complete family learning and travel experience.",
  },
  {
    slug: "service-flow",
    title: "Sample Camp Service Flow",
    eyebrow: "Full Journey Reference",
    summary: "Use a simple end-to-end flow from pre-arrival to final day support.",
    purpose: "To help coordinators understand the complete guest journey and responsibilities at each stage.",
    checklist: [
      "Before arrival: send guest materials, confirm flights, prepare logistics, and assign staff.",
      "Airport pickup: welcome guests, check headcount, assist luggage, and explain the day plan.",
      "Arrival day: provide light tour, mall stop, meal, or direct transfer based on arrival condition.",
      "Clark check-in: assist hotel check-in and remind guests about the next day.",
      "Camp days: coordinate classes, parent briefings, tours, shopping, and child-friendly support.",
      "Final day: support shopping, packing, consultation, ceremony, and airport transfer.",
    ],
    standards: [
      "Parents should feel prepared before arrival.",
      "Guests should feel safely received at airport pickup.",
      "Families should avoid fatigue and confusion on arrival day.",
      "Guests should leave with positive memories and clear learning value.",
    ],
    staffReminder: "Use this flow as the main service checklist for coordinator orientation.",
  },
];

export const aiVoiceQuestions = [
  {
    category: "Airport Arrival",
    questions: [
      ["Where is the meeting point?", "集合地點在哪裡？"],
      ["Where is the baggage claim area?", "行李提領區在哪裡？"],
      ["Where is the restroom?", "洗手間在哪裡？"],
      ["Where can we exchange money?", "我們可以在哪裡兌換貨幣？"],
      ["Where can we buy a local SIM card?", "我們可以在哪裡購買當地的 SIM 卡？"],
      ["Can you help us contact our coordinator?", "可以幫我們聯絡我們的協調員嗎？"],
    ],
  },
  {
    category: "Transportation",
    questions: [
      ["Are you our assigned driver?", "請問您是我們安排的司機嗎？"],
      ["Are we going to this hotel address?", "我們是要去這個飯店地址嗎？"],
      ["Can we stop at a restroom?", "可以停一下讓我們上洗手間嗎？"],
      ["Can you lower the air-conditioning?", "可以把冷氣調小一點嗎？"],
      ["What time will the driver pick us up tomorrow?", "明天司機幾點來接我們？"],
    ],
  },
  {
    category: "Hotel",
    questions: [
      ["Can we check in now?", "我們現在可以辦理入住嗎？"],
      ["Is our room ready?", "我們的房間準備好了嗎？"],
      ["What time is breakfast?", "早餐是幾點？"],
      ["What is the Wi-Fi password?", "Wi-Fi 密碼是什麼？"],
      ["Can someone help us with the room?", "可以請人協助我們處理房間問題嗎？"],
    ],
  },
  {
    category: "Restaurant and Food",
    questions: [
      ["Do you have food for children?", "你們有適合孩子的餐點嗎？"],
      ["Is this food spicy?", "這道菜會辣嗎？"],
      ["Can you make it not spicy?", "可以做成不辣嗎？"],
      ["Does this food have seafood or peanuts?", "這道菜有海鮮或花生嗎？"],
    ],
  },
  {
    category: "Shopping and Souvenirs",
    questions: [
      ["How much is this?", "這個多少錢？"],
      ["Is this food allowed for international travel?", "這個食品可以帶出國嗎？"],
      ["Is this already sealed?", "這個已經密封包裝了嗎？"],
      ["Can we have a receipt?", "可以給我們收據嗎？"],
    ],
  },
  {
    category: "Currency Exchange",
    questions: [
      ["What is the exchange rate today?", "今天的匯率是多少？"],
      ["How much Philippine peso will we receive?", "我們會收到多少菲律賓披索？"],
      ["Is there a service charge?", "有手續費嗎？"],
    ],
  },
  {
    category: "Parent-Child English Camp",
    questions: [
      ["Where is the camp meeting area?", "營隊集合地點在哪裡？"],
      ["What time does the class start?", "課程幾點開始？"],
      ["What time does the class finish?", "課程幾點結束？"],
      ["Where should parents wait during class?", "上課期間家長應該在哪裡等候？"],
      ["Can parents observe the class?", "家長可以觀課嗎？"],
      ["Can you update me about my child's progress?", "可以告訴我孩子的學習進展嗎？"],
    ],
  },
  {
    category: "Departure",
    questions: [
      ["What time should we leave for the airport?", "我們幾點應該出發去機場？"],
      ["Where should we meet the driver?", "我們應該在哪裡跟司機會合？"],
      ["Where is the check-in counter?", "登機報到櫃台在哪裡？"],
      ["Is this item allowed on the plane?", "這個物品可以帶上飛機嗎？"],
    ],
  },
];

export const scheduleItems = [
  {
    timing: "Daily",
    tasks: [
      "Employees update working calendars.",
      "Members update Weekly To-Do List progress and remarks.",
    ],
  },
  {
    timing: "Every Friday Morning",
    tasks: [
      "All members check and update Weekly To-Do Lists.",
      "Project leaders and related personnel update Goal Link progress when applicable.",
    ],
  },
  {
    timing: "Every Friday Afternoon",
    tasks: [
      "OICs check members Weekly To-Do Lists.",
      "OICs review members working calendars and add comments when needed.",
      "OICs notify members who did not update properly.",
    ],
  },
  {
    timing: "Every Monday",
    tasks: [
      "OICs send Weekly To-Do List to the group chat.",
      "Mary Joyce checks Goal Link updates when applicable.",
    ],
  },
  {
    timing: "Monthly by the 31st",
    tasks: [
      "Department OICs update and upload JR to WeDrive.",
    ],
  },
  {
    timing: "Monthly by the 1st",
    tasks: [
      "Mary Joyce checks JR updates on WeDrive.",
      "Employees review and update all Work Plans and upload latest files to WeDrive.",
    ],
  },
  {
    timing: "Monthly by the 5th",
    tasks: [
      "Employees submit KPI forms to department OICs.",
      "Employees submit Monthly Work Reflections to department OICs.",
      "Mary Joyce checks Work Plans on WeDrive.",
    ],
  },
  {
    timing: "Quarterly",
    tasks: [
      "Complete performance evaluation according to the quarterly schedule.",
    ],
  },
];

export const templates = [
  {
    title: "JR Checking Record Template",
    content: `Department:\nDate Checked:\nChecked By:\nLatest JR Date:\nEmployee Count in JR:\nEmployee Count from HR:\nDivision of Labor Checked: Yes / No\nResigned Employees Highlighted Grey: Yes / No / N/A\nFindings:\nRequired Action:\nDeadline:\nFinal Status: Complete / Needs Revision`,
  },
  {
    title: "Weekly To-Do List Checking Template",
    content: `Department:\nOIC:\nWeek Covered:\nChecked Date:\nMembers Checked:\nProgress Updated: Yes / No\nRemarks Updated: Yes / No\nCompleted Tasks with Accomplishment Date: Yes / No\nMembers Needing Reminder:\nOIC Follow-Up Action:\nFinal Status: Complete / Needs Revision`,
  },
  {
    title: "Calendar Random Checking Template",
    content: `Department:\nEmployee 1 Checked:\nEmployee 2 Checked:\nDate Checked:\nCalendar Updated Daily: Yes / No\nOIC Weekly Comment Found: Yes / No\nMissing Dates:\nFindings:\nReminder Needed: Yes / No\nFinal Status: Complete / Needs Revision`,
  },
  {
    title: "Work Plan OGSA Review Template",
    content: `Project / Task Name:\nEmployee:\nDate Reviewed:\nObjectives: Clear / Needs Revision\nGoals: Quantitative / Needs Revision\nStrategies: Connected to Objectives and Goals / Needs Revision\nAction Plan: Feasible and Timetable Included / Needs Revision\nLength: 1-2 Pages / Too Long\nOIC Comments:\nRequired Revision:\nFinal Status: Approved / Revise`,
  },
  {
    title: "Monthly KPI Checking Template",
    content: `Employee:\nDepartment:\nMonth Checked:\nPrevious Month Total:\nCurrent Month New Data:\nCorrect Current Month Format:\nExample: 30 (+10)\nBlank Data Uses N/A or /: Yes / No\nResigned Employees Highlighted Grey: Yes / No / N/A\nFindings:\nFinal Status: Complete / Needs Revision`,
  },
  {
    title: "Parent-Child Camp Airport Reception Checklist",
    content: `Group Name:\nArrival Date:\nFlight Number:\nExpected Guest Count:\nActual Guest Count:\nCoordinator Lead:\nDriver Name and Plate Number:\nWelcome Sign Prepared: Yes / No\nHeadcount Completed: Yes / No\nLuggage Assisted: Yes / No\nFirst-Day Itinerary Explained: Yes / No\nInternal Arrival Update Sent: Yes / No\nIssues / Notes:`,
  },
  {
    title: "Currency Exchange Support Checklist",
    content: `Guest Group:\nDate:\nExchange Location:\nOperating Hours Checked: Yes / No\nAccepted Currency Checked: Yes / No\nPassport / ID Reminder Given: Yes / No\nDisplayed Rate Checked: Yes / No\nReceipt Reminder Given: Yes / No\nCoordinator Did Not Personally Handle Large Cash: Yes / No\nNotes:`,
  },
];

export const faqs = [
  {
    question: "Does this website need a database?",
    answer: "Not for the first version. Since this is a staff guide website, the content can be stored directly in website files. Add a database only if staff must log in, submit reports, upload proof, or track checking history.",
  },
  {
    question: "Who is the website for?",
    answer: "It is for internal staff, especially monitoring staff, OICs, coordinators, and team members who need clear guide pages for monitoring tools and Parent-Child English Camp operations.",
  },
  {
    question: "What should be checked in JR monitoring?",
    answer: "Check the JR date, employee count, HR division of labor, resigned employees highlighted in grey, new employees added, and the latest upload in WeDrive.",
  },
  {
    question: "How should Monthly KPI numbers be written?",
    answer: "Use total plus monthly increase. Example: January is 20. February has 10 new records. February should be 30 (+10). If there is no data, use N/A or slash.",
  },
  {
    question: "What is the correct Work Plan format?",
    answer: "Use OGSA: Objectives, Goals, Strategies, and Action Plan. Objectives are qualitative. Goals are quantitative. Strategies connect to objectives and goals. Action Plan must be realistic and time-bound.",
  },
  {
    question: "Can this be deployed directly to Vercel?",
    answer: "Yes. Upload this project to GitHub, import it into Vercel, and deploy it as a Next.js project.",
  },
];

export function getMonitoringGuide(slug: string) {
  return monitoringGuides.find((item) => item.slug === slug);
}

export function getCampGuide(slug: string) {
  return campGuides.find((item) => item.slug === slug);
}
