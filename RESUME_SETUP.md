# 📄 Resume Setup Instructions

## How to Add Your Resume Link

### Step 1: Upload Resume to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your resume PDF
3. Right-click on the file → **Share**
4. Change permissions to **"Anyone with the link can view"**
5. Copy the share link

### Step 2: Convert to Direct View Link
Your Google Drive link will look like:
```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

Change it to:
```
https://drive.google.com/file/d/FILE_ID/preview
```

### Step 3: Update the Code
In `src/components/Hero.tsx`, replace `YOUR_RESUME_GDRIVE_LINK` with your actual link:

```tsx
{ icon: FileText, href: 'https://drive.google.com/file/d/YOUR_FILE_ID/preview', label: 'Resume' },
```

## Alternative: Direct Download Link
If you want users to download the resume instead of viewing it, use:
```
https://drive.google.com/uc?export=download&id=FILE_ID
```

## Example
If your Google Drive link is:
```
https://drive.google.com/file/d/1ABC123xyz789/view?usp=sharing
```

Use this in your code:
```tsx
{ icon: FileText, href: 'https://drive.google.com/file/d/1ABC123xyz789/preview', label: 'Resume' },
```

The resume icon will appear in the Hero section next to your social media links! 📄