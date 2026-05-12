The default UI for an LLM feature, almost everywhere, is a chat window.

You've used it. You probably have one open right now. Someone on your team is currently designing one. And we think — politely, but firmly — that it is almost always the wrong choice.

This is not a hot take dressed up for engagement. It's a structural argument. Chat is a UI pattern, and like all UI patterns, it has things it's good at and things it's bad at. The current cultural moment treats chat as universal, and as a result, we are watching billions of dollars get poured into building products that are objectively worse for their users than the alternatives would have been.

## What chat actually is

A chat window does three things:

1. It accepts an arbitrary text input from the user.
2. It calls a model with that input plus some history.
3. It renders the response as text.

Notice what it doesn't do: structure the interaction, constrain the input space, manage state across turns, or distinguish between casual conversation and load-bearing decisions. Every responsibility lives with the user.

That last sentence is the entire problem.

## Why this fails

**Chat dumps cognitive load on the user.** The user has to figure out what to type. They have to know what the system can and can't do. They have to remember what they already asked for. They have to phrase their request well enough to get a useful answer. None of these are things a good UI should require.

Compare a chat-based expense reporting tool to a form-based one. The form has fields: amount, date, category, vendor, receipt upload. The user fills them in. Done. The chat version requires the user to phrase a sentence like "I spent $47.32 on a working lunch on Tuesday at Bibou, here's the receipt" and hope the model parses every field correctly. Now imagine doing that twenty times in a row.

**Chat dumps reliability burden on the model.** A form validates client-side. A required field cannot be skipped. A numeric field cannot contain letters. A chat interface has none of this. Every constraint that should be enforced by the UI now has to be enforced by the model — which is the least reliable component in the system.

We've watched teams build chat-based interfaces and then discover, six months in, that 30% of their support tickets are users frustrated that the model "didn't understand what I asked." The model understood fine. The chat UI just made it possible for the user to ask in ways the model couldn't act on.

**Chat hides the system's actual capabilities.** A traditional UI has buttons. The user sees the buttons and learns what the system does. A chat UI has a text box. The user has to discover what to type. The result is that users use 5% of what your system can do because they don't know the other 95% exists.

Anthropic has slash commands in their interfaces partly for this reason. Cursor has slash commands. ChatGPT custom GPTs ship with starter prompts. The industry is, slowly and quietly, rediscovering that buttons exist for a reason.

## What good LLM UI looks like

The highest-leverage LLM features we've shipped don't look like chat at all. They look like:

- **Forms with smart fields.** The user fills out a normal form. The "summary" field has an LLM-powered auto-fill button. The LLM does work, but the UI is a form.
- **Pipelines.** A user pastes content. The system extracts structured data and renders it as a table. The user reviews the table and clicks "save" or edits the cells. Zero chat involved.
- **Workflow steps.** A user triggers a process. The system runs through five steps, some of which use an LLM, and reports back what was done. The user sees a list of actions, not a conversation.
- **Augmented existing UIs.** A spreadsheet with an LLM "explain this row" tooltip. A document editor with an LLM "improve this sentence" command on selection. The UI is the existing tool; the LLM is a capability inside it.
- **Background agents.** No UI at all. The LLM runs on a schedule, processes data, and writes results to a system the user already uses (CRM, sheets, Linear, etc.).

All of these have the same property: the LLM is doing work, but the user isn't *talking* to it. The interaction model is appropriate to the task.

## When chat is actually right

Chat is right when:

1. The user genuinely doesn't know what they want, and the system needs to help them figure it out. **Exploration interfaces.** Research tools, debugging tools, ChatGPT itself.
2. The user's input is genuinely open-ended and resists structuring. **Creative tools.** A novelist drafting prose with AI assistance. A designer riffing on visual ideas.
3. The interface is itself a chat product — customer support, social messaging, anything where the *interaction is the product*.

That's the list. It's not nothing — those are real, important categories. But it's also not "every software product, forever."

## Why everyone defaults to chat anyway

Two reasons:

**It's the shortest path from prototype to demo.** A chat window with a wired-up LLM call is the lowest-effort UI you can build. The model can answer almost anything, which makes the demo feel powerful. The fact that real users will struggle to *use* it productively is a problem you discover after launch, not before.

**ChatGPT trained everyone — including PMs and designers — to expect that LLM features look like chat.** When the most successful AI product in history is a chat window, the default mental model gets shaped by it. PMs draw chat mockups in Figma. Designers spec chat interactions. Engineers ship what's spec'd. Nobody asks whether the chat shape is right for the specific problem.

This is a fashionable mistake, not a technical one. The fix is simply to *think* about the shape of the interaction before defaulting to a text box.

## The test we use

When a client asks us to build a chat-based AI feature, we ask one question first: *what would the user have to type to get value out of this?*

If the honest answer is "anything — they could ask it almost anything," then chat might be right. (It probably still isn't, but it's a real conversation.)

If the honest answer is "they'd need to type one of seven specific things," then those seven things should be buttons.

If the honest answer is "they'd need to type a very specific structured request," then the UI should be a form.

If the honest answer is "they'd never type anything because the system should just do it on a schedule," then the UI should be a background job with a status view.

In the vast majority of cases, the answer is one of the latter three. We build accordingly.

## What we want you to take away

LLMs are general-purpose tools. That doesn't mean every interface that uses them should be general-purpose. The opposite is true: because the model is general, the *interface* needs to be specific.

The best LLM features make the user's job easier. The worst LLM features make the user's job *into typing*. Make sure you're building the former.

If you're staring at a chat interface in a Figma file and quietly worried that it's not going to land, [we'd be happy to talk through it](/contact). The reframe usually isn't hard once it's named.
