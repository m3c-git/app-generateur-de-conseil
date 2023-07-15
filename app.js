
main()

const el = document.querySelector("button");
el.addEventListener("click",main);
 
function advice(post)
{
    wrapper.innerText = "";
    const advices = document.createElement('div');
    advices.append(createElementWhithText ("h6", "Advice  #"+post.id));
    advices.append(createElementWhithText ("blockquote", post.advice));
    return advices;
}

function createElementWhithText(tagName, content)
{
    const element = document.createElement(tagName);
    element.innerText = content;
    return element;
}


async function main()
{
    const wrapper = document.querySelector("#wrapper");
    const loader = document.createElement("p");
    loader.classList.add("loader")
    loader.innerText = "Loading...";
    wrapper.append(loader);
    try {

        const r = await  fetch('https://api.adviceslip.com/advice',{
            headers: {
                Accept: 'application/json'
            }

        })
                if (r.ok) {
                    const post = await r.json();
                    loader.remove();
                    wrapper.append(advice(post.slip));
                } else {
                    throw new Error('Erreur serveur', {cause: r});
                }
            } catch (e) {
                loader.innerText = 'Impossible de charger les articles...';
                loader.style.color = 'red';
                return;
            }
        }          