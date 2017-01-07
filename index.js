import blessed from 'blessed'

let screen = blessed.screen({
	smartCSR: true
})

screen.title = 'Blessed MySQL Watcher'

let box = blessed.box({
	top: 'center',
	left: 'center',
	width: '50%',
	height: '50%',
	content: 'Hello {bold}Mysql{/bold}!',
	tags: true,
	border: {
		type: 'line'
	},
	style: {
		fg: 'white',
		bg: 'magenta',
		border: {
			fg: '#f0f0f0'
		},
		hover: {
			bg: 'green'
		}
	}
})

screen.append(box)

let icon = blessed.image({
	parent: box,
	top: 0,
	left: 0,
	type: 'overlay',
	width: 'shrink',
	height: 'shrink',
	file: __dirname + 'blessed-mysql-watcher.png',
	search: false
})

box.on('click',(data) => {
	box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}')
	screen.render()
})

box.on('enter',(ch,key) => {
	box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n')
	box.setLine(1,'bar')
	box.insetrLine(1,'foo')
	screen.render()
})

screen.key(['escape','q','C-c'],() => {
	process.exit(0)
})

box.focus()

screen.render()
