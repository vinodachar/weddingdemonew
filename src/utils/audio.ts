// Soft ambient wedding chime / melody player using Web Audio API
class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: any = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  private playTone(freq: number, duration: number, delay: number = 0) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    // Warm soft bell envelope
    gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + delay + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration);
  }

  public toggle(): boolean {
    this.initContext();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  private start() {
    this.isPlaying = true;
    // Pentatonic scale frequencies for meditative Indian wedding ambiance (Sa, Re, Ga, Pa, Dha)
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    let step = 0;

    const playPhrase = () => {
      const baseNote = notes[step % notes.length];
      this.playTone(baseNote, 2.5, 0);
      this.playTone(baseNote * 1.5, 2.0, 0.4);
      step++;
    };

    playPhrase();
    this.intervalId = setInterval(playPhrase, 3500);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
