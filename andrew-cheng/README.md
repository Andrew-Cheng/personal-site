# Andrew Cheng's personal site

A Jekyll site with Markdown content and plain CSS, deployed to GitHub Pages.

## Run locally

Use Ruby 4.0 and Bundler. On macOS, install Ruby with `brew install ruby` if needed, then open a new terminal. The system Ruby bundled with macOS is too old.

From the repository root:

```sh
cd andrew-cheng
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/. Stop the server with Ctrl-C. Content and CSS changes rebuild automatically; restart after changing `_config.yml`.

To preview at the domain root instead:

```sh
bundle exec jekyll serve --baseurl ""
```

## Edit the site

- `index.md`: homepage content.
- `projects.md`: Projects page heading and project-list include.
- `_projects/*.md`: one Markdown file per project; edit descriptions and bullet points here. The YAML front matter stores the title, display order, credits, and optional video/PDF paths.
- `resume.md`: Resume page text and PDF include.
- `404.md`: page-not-found content.
- `_includes/`: shared navigation, social icons, project cards, and PDF embeds.
- `_layouts/default.html`: shared page shell and metadata.
- `assets/css/style.css`: styling.
- `public/`: videos and PDFs (their URLs include `/public/`). Replace `resume.pdf` here to update your resume.
- `_config.yml`: site title, URL, and base path.

Internal links and asset paths must use Liquid's `relative_url` filter so they work under the repository path and at a custom domain.

Use normal Markdown for content: `## Heading`, `- List item`, and `[SATA](https://arxiv.org/abs/2409.19850)` for a clickable word. To add a project, copy a file in `_projects/`, edit its content and front matter, and choose its `order`.

Always edit the source files listed above, never files inside `_site/`; Jekyll overwrites that generated folder on each build.

## Build

```sh
bundle exec jekyll build
```

Output goes to `_site/`, which is ignored by Git. No Node.js build is needed.

## Publish to GitHub Pages

1. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source.
2. Commit and push the migration to `main`.
3. The `.github/workflows/pages.yml` workflow builds the site and deploys it. Pull requests build without deploying.

The configured address is https://andrew-cheng.com/.

For a custom domain, set `url` to the full HTTPS domain and `baseurl: ""` in `_config.yml`, then configure the custom domain and DNS in GitHub Pages settings. For an `Andrew-Cheng.github.io` repository, also set `baseurl: ""`.

The migration removes Vercel Analytics. Publishing these files does not change an existing Vercel project or its DNS; retire that deployment after verifying GitHub Pages.

Deployment uses Jekyll 4 through GitHub Actions, so select **GitHub Actions**, not the branch-based Jekyll builder.

References: [Jekyll documentation](https://jekyllrb.com/docs/) and [GitHub Pages deployment action](https://github.com/actions/deploy-pages).
