export const initialInput = `
# Sample Markdown Previewer 
----
## h2 Heading
${"`this is an inline code`"}

---
${"```js"}
${"this is a code block"}
${"```"}
---
our list item: 
1. first item
2. second item

> here is a block quote.
>
>> nested block quote.

it also supports images!

![nodejs image](https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/w9u60357jk4ozdho7urq.jpg)


Text attributes *italic*, **bold**, ${"`monospace`"}, ~~strikethrough~~ .

---

#### Created by:
> [Amir Yeganeh](https://github.com/amiryeg1)
<br>
`;
