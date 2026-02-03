---
allowed-tools: Bash(dev/scripts/create-worktree.sh:*), Bash(dev/scripts/setup-worktree.sh:*), Bash(dev/scripts/open-terminal.sh:*), Bash(cd:*), Bash(npm:*), Bash(shuf:*), Bash(git worktree list:*)
description: Create new worktree and setup project with dependencies (project)
---

Create a new Git worktree with a creative random name and open terminal with Claude.

## Name Pool (pick a random name not already in use)

Math Terms: wt-integral, wt-derivative, wt-tangent, wt-cosine, wt-algebra, wt-calculus, wt-matrix, wt-vector, wt-theorem, wt-proof, wt-axiom, wt-lemma

Mathematicians: wt-euler, wt-gauss, wt-riemann, wt-pythagoras, wt-archimedes, wt-fibonacci, wt-ramanujan, wt-noether, wt-cauchy, wt-lagrange

Greek Letters: wt-alpha, wt-beta, wt-gamma, wt-delta, wt-epsilon, wt-theta, wt-lambda, wt-sigma, wt-omega, wt-phi, wt-psi

## Steps to execute:

1. First, check existing worktrees: `git worktree list`

2. Pick 1 random name from the pools above that is NOT already in use as worktree branch

3. For the name, run:
   - Create worktree: `bash dev/scripts/create-worktree.sh <name>`
   - Setup dependencies: `bash dev/scripts/setup-worktree.sh <name>`

4. After worktree is created and setup, open terminal with Claude running:
   - `bash dev/scripts/open-terminal.sh ../skillforge--worktrees/<name> "ai"`

5. Provide summary to user with:
   - Worktree location created
   - Confirm terminal is open with Claude running
   - Remind them `npm run dev` to start dev server
