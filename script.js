var myGame = new WizardOrpheus('', `
At Aura High, reputation is everything, and "Aura Points" determine your social standing. Every action affects your aura: walking the halls with your bag open loses points, while looking cool and acting nonchalant gains points. Navigating school life requires you to manage your aura wisely—confidence and style boost your score, while clumsiness and anxiety diminish it. Rumors suggest that top students know secret methods to increase their aura, but these secrets are closely guarded. Stay sharp, stay cool, and keep your aura high to succeed at Aura High.
`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})

myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})


