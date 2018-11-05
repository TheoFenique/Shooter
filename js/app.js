const shooter = {}

// Set up
shooter.$container = document.querySelector('.shooter')
shooter.$targets = shooter.$container.querySelector('.targets')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$score = shooter.$container.querySelector('.score .value')


shooter.addTarget = () =>
{
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random()*100}%`
    $target.style.left = `${Math.random()*100}%`
    shooter.$targets.appendChild($target)

    $target.addEventListener('mouseenter', () =>
    {
       shooter.shootTarget($target)
    })
}
let score = 0
shooter.shootTarget = (_$target) =>
{
    _$target.remove()
    shooter.addTarget()
    score++
    shooter.$score.innerHTML = `${score}`
}

shooter.addTarget()

