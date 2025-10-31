import os
from pathlib import Path

def main():
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    audio_file = script_dir / "ulala.wav"

    if not audio_file.exists():
        print(f"Error: {audio_file} not found")
        return

    try:
        # Try using ossaudiodev (Unix/Linux)
        import ossaudiodev
        with open(audio_file, 'rb') as f:
            dsp = ossaudiodev.open('w')
            dsp.write(f.read())
            dsp.close()
        print(f"Playing {audio_file}")
    except (ImportError, OSError):
        # Fallback: Try using afplay on macOS
        try:
            os.system(f"afplay '{audio_file}'")
            print(f"Playing {audio_file}")
        except Exception as e:
            # Final fallback: Try playsound library
            try:
                from playsound import playsound
                playsound(str(audio_file))
                print(f"Playing {audio_file}")
            except ImportError:
                print("Error: No audio playback library available. Install 'playsound' with: pip install playsound")
            except Exception as e:
                print(f"Error playing audio: {e}")


if __name__ == "__main__":
    main()
