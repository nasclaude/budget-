# Budget

A simple app for tracking income, spending and savings in euros, made for iPhone. In English or Bulgarian.

- **Overview:** what's left this month, income / spent / saved, spending by category,
  a comparison with last month and a 6-month chart. Switch to **Year** for yearly totals,
  savings growth, best and worst months, a month-by-month table and totals per category
- **Income:** total income for the month, broken down by source (salary, частни уроци, …)
- **Spending:** total spent, spending by category with monthly limits and warnings
- **Savings:** log the money you put aside, with a note. Each time it asks whether it's
  from your salary: if yes, it comes out of the month's money; if not, it's extra money.
  Shows what you saved this month, your total savings and a log by month
- **Compare months:** this month against last month by default, or any two months
- **English or Bulgarian** (Settings → Language)
- Add your own sources and categories while adding an entry (**+ New**); a matching emoji
  is picked from the name automatically (Bulgarian and English)
- Recurring entries (salary, rent, subscriptions) added automatically each month
- Optional 4-digit PIN lock, backup / restore file and CSV export
- Works offline, light and dark mode

## Privacy

There is no server and no account. Everything you enter is stored only in the
browser on your own device and is never sent anywhere. Anyone else who opens the
site gets their own empty copy.

Because the data lives only on your phone, use **Settings → Back up** now and
then. If the website data is cleared or you change phones, restore from that file.

## Install on iPhone

1. Open the site in **Safari**.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**.
3. Always open the app from that icon. iPhone keeps the Home Screen app's data
   separate from Safari's, so entries made in a Safari tab won't appear there.

## Files

- `index.html`: the whole app (HTML, CSS and JavaScript, no dependencies)
- `sw.js`: offline support
- `manifest.json`, `icons/`: Home Screen name and icon
