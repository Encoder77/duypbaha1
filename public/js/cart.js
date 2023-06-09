function handleAdd(event) {
	const card = event.target.closest('.card')
	card.classList.add('add-active')
	console.log(card)
}

function plusLess(event, type) {
	const card = event.target.closest('.card')
	const input = card.querySelector('input')
	let oldVal = Number(input.value)
	if (type == 'less') {
		if (oldVal == 1) {
			card.classList.remove('add-active')
			return
		}
		input.value = oldVal -= 1
	} else {
		input.value = oldVal += 1
	}
}

const cards = document.querySelectorAll(".blog_section")


cards.forEach(el  => {
	const full = el.childNodes[1]
	const btn = full.childNodes[3]
	const article = full.childNodes[1]
	const struct = article.childNodes[1]
	const texts  = struct.childNodes[3]
	const figure  = struct.childNodes[1]
	const pri = texts.childNodes[5]
	const img = figure.childNodes[1].currentSrc
	const name = texts.childNodes[1].innerText
	const price = pri.childNodes[1].nodeValue
	btn.addEventListener("click", () => {
		const storage = localStorage.getItem("cart") || "[]"
		const cart = JSON.parse(storage)
		const card ={ name, img, price}
		localStorage.setItem("cart", JSON.stringify([...cart, card]))
	})
	
})