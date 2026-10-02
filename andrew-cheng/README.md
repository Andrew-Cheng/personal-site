# Andrew Cheng's personal site

A Jekyll site with plain CSS and static HTML, deployed to GitHub Pages.

## Run locally

Use Ruby 4.0 and Bundler. On macOS, install Ruby with `brew install ruby` if needed, then open a new terminal. The system Ruby bundled with macOS is too old.

From the repository root:

```sh
cd andrew-cheng
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/personal-site/. Stop the server with Ctrl-C. Content and CSS changes rebuild automatically; restart after changing `_config.yml`.

To preview at the domain root instead:

```sh
bundle exec jekyll serve --baseurl ""
```

## Edit the site

- `index.html`: homepage content.
- `_data/projects.json`: project descriptions, features, credits, and videos.
- `_includes/`: navigation, social icons, and project cards.
- `_layouts/default.html`: shared page shell and metadata.
- `assets/css/style.css`: styling.
- `public/`: video files (their URLs include `/public/`).
- `_config.yml`: site title, URL, and base path.

Internal links and asset paths must use Liquid's `relative_url` filter so they work under the repository path and at a custom domain.

## Build

```sh
bundle exec jekyll build
```

Output goes to `_site/`, which is ignored by Git. No Node.js build is needed.

## Publish to GitHub Pages

1. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source.
2. Commit and push the migration to `main`.
3. The `.github/workflows/pages.yml` workflow builds the site and deploys it. Pull requests build without deploying.

The configured address is https://andrew-cheng.github.io/personal-site/.

For a custom domain, set `url` to the full HTTPS domain and `baseurl: ""` in `_config.yml`, then configure the custom domain and DNS in GitHub Pages settings. For an `Andrew-Cheng.github.io` repository, also set `baseurl: ""`.

The migration removes Vercel Analytics. Publishing these files does not change an existing Vercel project or its DNS; retire that deployment after verifying GitHub Pages.

Deployment uses Jekyll 4 through GitHub Actions, so select **GitHub Actions**, not the branch-based Jekyll builder.

References: [Jekyll documentation](https://jekyllrb.com/docs/) and [GitHub Pages deployment action](https://github.com/actions/deploy-pages).
