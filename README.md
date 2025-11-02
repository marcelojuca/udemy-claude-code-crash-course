# Hooks Notifications

A Python utility that plays a notification sound when Claude Code hooks are triggered. This project demonstrates how to integrate system audio feedback with Claude Code's hook system.

## Overview

This project provides audio notification capabilities for Claude Code hooks. When the `stop` hook is triggered, a notification sound plays to alert you that a Claude Code operation has completed.

## Features

- **Hook Integration** - Plays sound when Claude Code `stop` hook is triggered
- **Cross-platform Audio** - Works on Linux, macOS, and Windows
- **Intelligent Fallback** - Automatically tries multiple audio playback methods
- **Error Handling** - Graceful error messages when audio playback fails
- **Minimal Dependencies** - Works with system utilities when possible

## How It Works

Claude Code supports custom hooks that can execute shell commands in response to specific events. This project uses the `stop` hook to trigger audio playback:

1. Claude Code runs a command or operation
2. When the operation completes, the `stop` hook is triggered
3. The hook executes `play_sound.py`
4. The script plays `ulala.wav` as a notification sound

## Installation

### Prerequisites

- Python >= 3.8
- Access to Claude Code hook configuration

### Setup Steps

1. Clone or download this repository to your local machine

2. (Optional) Create a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. Install optional audio dependencies for better compatibility:
```bash
pip install playsound
```

## Configuration

### Setting Up the Stop Hook

Configure Claude Code to play a sound when operations complete:

1. Open your Claude Code settings
2. Add or modify the `stop` hook to execute this script:
```json
{
  "hooks": {
    "stop": "python /path/to/hooks-notifications/play_sound.py"
  }
}
```

Replace `/path/to/hooks-notifications` with the actual path to this project directory.

### Alternative: Full Path Configuration

If the above doesn't work, specify the full Python path:
```json
{
  "hooks": {
    "stop": "/usr/bin/python3 /path/to/hooks-notifications/play_sound.py"
  }
}
```

## Usage

### Manual Testing

Test the sound playback directly without Claude Code:
```bash
python play_sound.py
```

You should hear the notification sound play.

### With Claude Code

Once configured, the sound will play automatically whenever Claude Code completes an operation (hook event).

## Technical Details

### play_sound.py

The main script that handles audio playback with the following logic:

1. **File Validation** - Verifies `ulala.wav` exists in the same directory
2. **Platform Detection** - Automatically selects the best playback method for your OS
3. **Fallback Strategy** - Tries multiple methods in order:
   - `ossaudiodev` (Linux/Unix) - Direct device access
   - `afplay` (macOS) - Built-in system command
   - `playsound` (All platforms) - Python library fallback

### Audio Playback Methods

| Method | Platform | Pros | Cons |
|--------|----------|------|------|
| **ossaudiodev** | Linux/Unix | Direct, no external deps | Linux-specific |
| **afplay** | macOS | Built-in, no install needed | macOS-only |
| **playsound** | All platforms | Universal support | Requires pip install |

## Project Structure

```
hooks-notifications/
├── play_sound.py          # Main notification sound script
├── ulala.wav              # Notification audio file
├── pyproject.toml         # Project configuration
├── uv.lock                # Dependency lock file
├── .python-version        # Python version spec
├── .venv/                 # Virtual environment (optional)
└── README.md              # This file
```

## Troubleshooting

### Sound Not Playing on macOS

The script uses the native `afplay` command. If no sound plays:
- Check that system volume is not muted
- Verify speakers/audio output is connected
- Run manually: `afplay ulala.wav`

### Sound Not Playing on Linux

Install an audio playback library:
```bash
pip install playsound
```

Or install ossaudiodev:
```bash
pip install ossaudiodev
```

### Sound Not Playing on Windows

Install playsound:
```bash
pip install playsound
```

### Hook Not Triggering

1. Verify the path in your Claude Code hook configuration is correct
2. Test that `play_sound.py` runs manually
3. Check Claude Code settings are properly saved
4. Ensure the `stop` hook event is being triggered

### "No audio playback library available" Error

Install the fallback library:
```bash
pip install playsound
```

## Code Review Notes

The implementation includes:
- **Robust error handling** with multiple fallback methods
- **Cross-platform compatibility** using pathlib for file paths
- **Clear user feedback** via print statements and error messages

Potential improvements:
- More specific exception handling (avoiding broad `except Exception`)
- Using `subprocess` instead of `os.system()` for security
- Adding `playsound` to optional dependencies in `pyproject.toml`

## Customization

### Using a Different Sound File

Replace `ulala.wav` with any WAV audio file. To use a different file format or name:

1. Add your audio file to the project directory
2. Modify `play_sound.py` line 7:
```python
audio_file = script_dir / "your_sound_file.mp3"
```

## Next Steps

- [ ] Add volume control option
- [ ] Support for multiple notification sounds
- [ ] Configuration file for custom settings
- [ ] Async audio playback to avoid blocking operations
- [ ] Performance metrics for hook triggering

## License

[Add your license here]

## Resources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/claude_code_docs_map.md)
- [Python Audio Libraries](https://wiki.python.org/moin/Audio/)
- [macOS afplay Command](https://ss64.com/osx/afplay.html)

## Support

For issues or questions about this project, please refer to the Claude Code documentation or open an issue in the repository.
