import Phaser from 'phaser'

const STAR_COUNT = 6
const STAR_FILL = 0xffd166
const STAR_MARGIN = 90
const BASE_SPEED = 80
const FPS_REFRESH_MS = 250
const FONT_STACK = '"Segoe UI Rounded", "Segoe UI", system-ui, sans-serif'

interface StarMomentum {
  x: number
  y: number
}

/**
 * Juego de prueba: toca las estrellas del cielo para sumar puntos.
 * Verifica la integración Phaser + React, el input táctil y el objetivo de 60 FPS.
 */
export class StarCatchScene extends Phaser.Scene {
  private readonly stars: Phaser.GameObjects.Star[] = []
  private readonly momentum = new Map<Phaser.GameObjects.Star, StarMomentum>()
  private score = 0
  private fpsAccumulator = 0
  private scoreText!: Phaser.GameObjects.Text
  private fpsText!: Phaser.GameObjects.Text

  constructor() {
    super('StarCatchScene')
  }

  create(): void {
    this.score = 0
    this.stars.length = 0
    this.momentum.clear()

    this.cameras.main.setBackgroundColor('#0B2A45')
    this.createBackdrop()
    this.createStars()
    this.createHud()
  }

  update(_time: number, delta: number): void {
    const step = delta / 1000
    const { width, height } = this.scale

    for (const star of this.stars) {
      const speed = this.momentum.get(star)
      if (!speed) continue

      star.x += speed.x * step
      star.y += speed.y * step

      const radius = Math.max(star.displayWidth, star.displayHeight) / 2

      if (star.x < radius) {
        star.x = radius
        speed.x = Math.abs(speed.x)
      } else if (star.x > width - radius) {
        star.x = width - radius
        speed.x = -Math.abs(speed.x)
      }

      if (star.y < radius) {
        star.y = radius
        speed.y = Math.abs(speed.y)
      } else if (star.y > height - radius) {
        star.y = height - radius
        speed.y = -Math.abs(speed.y)
      }
    }

    this.fpsAccumulator += delta
    if (this.fpsAccumulator >= FPS_REFRESH_MS) {
      this.fpsAccumulator = 0
      this.fpsText.setText(`FPS: ${Math.round(this.game.loop.actualFps)}`)
    }
  }

  private createBackdrop(): void {
    const { width, height } = this.scale

    const sky = this.add.graphics()
    sky.fillGradientStyle(0x184e77, 0x1e6091, 0x0b2a45, 0x0b2a45, 1)
    sky.fillRect(0, 0, width, height)
    sky.setDepth(-1)

    for (let i = 0; i < 36; i += 1) {
      const dot = this.add.circle(
        Phaser.Math.Between(0, width),
        Phaser.Math.Between(0, height),
        Phaser.Math.FloatBetween(1, 2.6),
        0xffffff,
        Phaser.Math.FloatBetween(0.15, 0.5),
      )
      dot.setDepth(-1)
      this.tweens.add({
        targets: dot,
        alpha: { from: dot.alpha, to: 0.05 },
        duration: Phaser.Math.Between(900, 2200),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      })
    }
  }

  private createStars(): void {
    const { width, height } = this.scale

    for (let i = 0; i < STAR_COUNT; i += 1) {
      const outer = Phaser.Math.Between(34, 52)
      const star = this.add.star(
        Phaser.Math.Between(STAR_MARGIN, width - STAR_MARGIN),
        Phaser.Math.Between(STAR_MARGIN, height - STAR_MARGIN),
        5,
        outer * 0.45,
        outer,
        STAR_FILL,
        1,
      )

      star.setInteractive({ useHandCursor: true })
      star.on('pointerdown', () => this.collectStar(star))

      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2)
      const speed = Phaser.Math.Between(BASE_SPEED, BASE_SPEED + 55)
      this.stars.push(star)
      this.momentum.set(star, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      })

      this.tweens.add({
        targets: star,
        angle: 360,
        duration: 7000 + i * 450,
        repeat: -1,
        ease: 'Linear',
      })
      this.tweens.add({
        targets: star,
        alpha: { from: 0.75, to: 1 },
        duration: 1100 + i * 90,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      })
    }
  }

  private createHud(): void {
    const { width } = this.scale

    this.add
      .text(width / 2, 24, '¡Toca las estrellas!', {
        fontFamily: FONT_STACK,
        fontSize: '30px',
        fontStyle: 'bold',
        color: '#b5e2fa',
      })
      .setOrigin(0.5, 0)

    this.scoreText = this.add.text(28, 22, 'Puntos: 0', {
      fontFamily: FONT_STACK,
      fontSize: '28px',
      fontStyle: 'bold',
      color: '#ffffff',
    })

    this.fpsText = this.add
      .text(width - 28, 24, 'FPS: --', {
        fontFamily: FONT_STACK,
        fontSize: '22px',
        fontStyle: 'bold',
        color: '#ffd166',
      })
      .setOrigin(1, 0)
  }

  private collectStar(star: Phaser.GameObjects.Star): void {
    this.score += 10
    this.scoreText.setText(`Puntos: ${this.score}`)

    this.addPop(star.x, star.y)
    this.relocate(star)

    this.tweens.add({
      targets: star,
      scale: 1.45,
      duration: 150,
      yoyo: true,
      ease: 'Quad.easeOut',
    })
  }

  private relocate(star: Phaser.GameObjects.Star): void {
    const { width, height } = this.scale
    star.setPosition(
      Phaser.Math.Between(STAR_MARGIN, width - STAR_MARGIN),
      Phaser.Math.Between(STAR_MARGIN, height - STAR_MARGIN),
    )
  }

  private addPop(x: number, y: number): void {
    const ring = this.add.circle(x, y, 26).setStrokeStyle(5, STAR_FILL, 1)

    this.tweens.add({
      targets: ring,
      scale: 2.4,
      alpha: 0,
      duration: 360,
      ease: 'Quad.easeOut',
      onComplete: () => ring.destroy(),
    })
  }
}
