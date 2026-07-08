# ✅ GitHub Username Configuration

## Your GitHub Profile
**Username:** `PDReddyDhanu`  
**Profile URL:** https://github.com/PDReddyDhanu

---

## 📍 Where Your GitHub Username is Used

### 1. **GitHub Activity Component** 📡
**File:** `components/GitHubActivity.tsx`  
**Line:** 31  
**Usage:** Fetches live GitHub data

```typescript
const username = 'PDReddyDhanu';
```

**API Endpoints:**
- `https://api.github.com/users/PDReddyDhanu/events/public`
- `https://api.github.com/users/PDReddyDhanu`
- `https://api.github.com/users/PDReddyDhanu/repos`

**What it fetches:**
- ✅ Total repositories count
- ✅ GitHub stars across all repos
- ✅ Recent activity (commits, PRs, etc.)
- ✅ Public events

---

### 2. **Project Links** 💻
**File:** `components/Projects.tsx`

All project GitHub links now use `PDReddyDhanu`:

1. **HackSprint**
   - ✅ `https://github.com/PDReddyDhanu/hacksprint_`

2. **Portfolio**
   - ✅ `https://github.com/PDReddyDhanu/My_Portfolio`

3. **AI Chatbot**
   - ✅ `https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR`

4. **Music Tunes**
   - ✅ `https://github.com/PDReddyDhanu/Short-Music-Tunes`

5. **Food Feedback**
   - ✅ `https://github.com/PDReddyDhanu/hostel-food-feedback`

6. **"View All Projects" Button**
   - ✅ `https://github.com/PDReddyDhanu`

---

### 3. **Interactive Terminal** 💻
**File:** `components/InteractiveTerminal.tsx`

**Contact Command:**
```typescript
contact: () => (
    ...
    🐙 GitHub: github.com/PDReddyDhanu
    ...
)
```

**GitHub Command:**
```typescript
github: () => {
    window.open('https://github.com/PDReddyDhanu', '_blank');
    return '🐙 Opening GitHub profile...';
}
```

---

### 4. **AI Chatbot** 🤖
**File:** `components/AIChatbot.tsx`

**Contact Response:**
```typescript
if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return "You can reach Dhanunjay at:\n\n
        📧 Email: palakolanudhanunjayreddy@gmail.com\n
        💼 LinkedIn: linkedin.com/in/palakolanu-dhanunjay-reddy\n
        🐙 GitHub: github.com/PDReddyDhanu\n\n
        Feel free to connect!";
}
```

---

### 5. **Footer Component** 🔗
**File:** `components/Footer.tsx`

```typescript
{
    icon: <GitHubIcon />,
    href: "https://github.com/PDReddyDhanu",
    label: "GitHub"
}
```

---

### 6. **Contact Section** 📧
**File:** `components/Contact.tsx`

```tsx
<a href="https://github.com/PDReddyDhanu" ...>
    GitHub Profile
</a>
```

---

## 🔄 Live Data Features

### GitHub Activity Section
The GitHub Activity component automatically fetches:

1. **User Statistics:**
   - Total public repositories
   - Total stars across all repos
   - Recent commits count
   - Activity streak (calculated)

2. **Recent Events:**
   - Push events (commits)
   - Repository creation
   - Pull requests
   - Stars and forks
   - Issues

3. **Contribution Graph:**
   - Last 12 weeks of activity
   - Visual heatmap
   - Hover for details

### API Rate Limits
- **Unauthenticated:** 60 requests/hour
- **Authenticated:** 5,000 requests/hour (if you add a token)

**Current Setup:** Unauthenticated (sufficient for portfolio)

---

## ✨ How It Works

### When Someone Visits Your Portfolio:

1. **GitHub Activity Section Loads:**
   ```
   Loading... 🔄
   ↓
   Fetches data from GitHub API
   ↓
   Displays live stats ✅
   ```

2. **Data Displayed:**
   - 📦 Your total repositories
   - ⭐ Total stars you've received
   - 📝 Recent contributions
   - 🔥 Activity streak
   - 📊 Contribution heatmap
   - ⚡ Recent activity feed

3. **All Links Work:**
   - Clicking any GitHub link opens your profile
   - Project links go to specific repositories
   - Terminal `github` command opens profile
   - Chatbot provides GitHub link

---

## 🎯 Verification

All GitHub references are now consistent and point to:
**`https://github.com/PDReddyDhanu`**

### Test It:
1. **Open your portfolio** in the browser
2. **Scroll to GitHub Activity** section
3. **Check if stats load** (should show your real data)
4. **Click "View full profile"** (should open your GitHub)
5. **Try the terminal** `github` command
6. **Ask the chatbot** "How can I contact you?"
7. **Check project cards** for GitHub buttons

---

## 🚀 What's Fetched Live

### Real-Time Data:
- ✅ Repository count
- ✅ Star count
- ✅ Recent commits
- ✅ Recent activity
- ✅ Public events

### Static Data:
- Contribution heatmap (demo data - can be enhanced with GraphQL)
- Streak count (estimated - can be enhanced with GraphQL)

---

## 💡 Optional Enhancement

If you want **more accurate contribution data**, you can:

1. Create a GitHub Personal Access Token
2. Use GitHub GraphQL API
3. Get real contribution heatmap
4. Get accurate streak data

**Current setup works great without a token!** ✨

---

## ✅ Summary

Your GitHub username `PDReddyDhanu` is now:
- ✅ Configured in GitHub Activity component
- ✅ Used in all project links
- ✅ Referenced in terminal commands
- ✅ Mentioned in chatbot responses
- ✅ Linked in footer
- ✅ Connected in contact section

**Everything is set up correctly and ready to showcase your GitHub activity!** 🎉

---

**Last Updated:** December 8, 2025  
**Status:** ✅ Fully Configured  
**GitHub Profile:** https://github.com/PDReddyDhanu
