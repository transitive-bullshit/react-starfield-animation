/**
 * @class Particle
 */

export default class Particle {
  constructor(bounds) {
    this._bounds = bounds
    this.reset(true)
  }

  reset(init = false) {
    this.z = init ? random(0, this._bounds.z.max) : this._bounds.z.max
    const depth = (this._bounds.depth / (this._bounds.depth + this.z))

    this.x = random(this._bounds.x.min, this._bounds.x.max) / depth
    this.y = random(this._bounds.y.min, this._bounds.y.max) / depth
    this.ox = this.x
    this.oy = this.y
    this.oz = this.z
    this.vx = 0
    this.vy = 0
    this.vz = random(-1, -10)
    this.ax = 0
    this.ay = 0
    this.az = 0
    this.s = 0
    this.sx = 0
    this.sy = 0
    this.os = this.s
    this.osx = this.sx
    this.osy = this.sy
    this.hue = random(120, 200)
    this.lightness = random(70, 100)
    this.alpha = 0
  }

  update() {
    this.vx += this.ax
    this.vy += this.ay
    this.vz += this.az

    this.x += this.vx
    this.y += this.vy
    this.z += this.vz

    if (this.sx - this.sr > this._bounds.x.max ||
      this.sy - this.sr > this._bounds.y.max ||
      this.z > this._bounds.z.max ||
      this.sx + this.sr < this._bounds.x.min ||
      this.sy + this.sr < this._bounds.y.min ||
      this.z < this._bounds.z.min
    ) {
      this.reset()
    }

    this.ox = this.x
    this.oy = this.y
    this.oz = this.z
    this.os = this.s
    this.osx = this.sx
    this.osy = this.sy
  }
}

function random (min, max) {
  return Math.random() * (max - min) + min
}
