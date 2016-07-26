# Contributing
Community patches, bug reports, and contributions are always welcome and are crucial to ensure `gmusic-theme.js` stays stable. Here are steps/guidelines to follow when contributing.

## Opening an issue
Before starting work on an issue, please make sure that the issue isn't being worked on by anyone else. This can be verified by searching in open issues and pull requests:

https://github.com/gmusic-utils/gmusic-theme.js/issues

- If an issue already exists, please use that issue instead of creating a new one
- Otherwise, please create a new issue
    - Please restrict issues to a single feature/issue
    - If the issue is a bug report, then please provide information about your setup as well as steps to reproduce
- If the issue is time sensitive, then feel free to start work immediately
    - Please communicate that via the issue (e.g. via a comment on the thread)
- Otherwise, if possible, please wait for a core contributor to approve your work
    - This is prevent unnecessary rejection when a pull request is opened

## Making changes
To make sure that there is no duplicate work across contributors, please always [Open an issue][] before beginning work.

[Open an issue]: #opening-an-issue

When you start work, please comment on the issue that you are starting work. This is to prevent duplicate work by contributors.

- If you are a core contributor, then you may create a branch on the main repository
    - Please clean up your branches once the PR is landed. This is as simple as ensuring you click the `Delete Branch` button on Github after the PR is merged
    - We prefer to name branches to indicate the intent of the branch
        - Additionally, a prefix is nice to indicate development (`dev/`), a bug patch (`bug/` or `fix/`)
        - Examples of good branch names: `dev/new-muted-color`, `bug/icon-color-changes`, etc
- Please restrict work to 1 issue/pull request at a time
    - If there are inter-dependent issues, then please work on inter-dependent branches (e.g. `bug/fix.track.tests`, `dev/alter.track.info`)
- Generally, changes will be made to the files in the `lib/` although files in `src/` can also be edited depending on the work being undertaken
    - *Do not* manually edit anything in the `build/` folder. These files are generated using the files in `lib/`
- Once your changes are complete, assuming you've made CSS changes, you will need to run the build script 
    - Run `npm run build` from the root directory to generate the distribution files
    - Confirm the changes by running `git status` - you should see changes in the `build/` directory

## Submitting changes
To submit your changes, please open a pull request from your fork/branch to the `gmusic-theme.js` `master` branch. If this is for an inter-dependent branch, please still point to the `master` branch. When one PR is landed, then the other should automatically land as well.

While we don't require squashing commits for historical reasons, please avoid unnecessary commits in the final pull request. These can be cleaned up via `squash` in `git rebase -i` (more info on rebasing [here](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)).

If there is a particular contributor that should review the pull request, then please add them via a "/cc @username" on the pull request.

## Approval process
Due to the brittle nature of `gmusic-theme.js`, we must be flexible to allow for quick deployment of fixes. Please use the following guidelines when approving/landing changes.

- If the issue is time sensitive, please wait up to 24 hours to hear from another core contributor
    - If you don't hear from anyone else, then use your best judgement to land the PR or not
- If the issue is not time sensitive, please wait for at least 1 other core contributor to approve the PR (e.g. via a ":+1:", ":shipit:", or "lgtm")
    - If the PR is a large change (e.g. refactoring the library), then please use your judgement and consider waiting for more contributors

## Release process
Note - the following can only be performed by a core contributor.

- Determine whether this is a major, minor, or patch release
    - Versioning documentation: http://semver.org/
- Run `npm version` with release type
    - For example: `npm version patch` for a patch release
    - This will increment the `package.json` version, create a new `git commit`, and create a new `git tag`
- Run `npm publish` to publish to `npm`
- Run `git push && git push --tags` to publish to GitHub

## Questions?
We want contributing to be as painless as possible, and as such have attempted to keep the bar to entry as low as we can while still maintaining a stable codebase.  If you have any questions about contributing, feel free to [open an issue](https://github.com/gmusic-utils/gmusic-theme.js/issues) and we'll respond as soon as we can.
