To begin using Tailwindcss on your machine, follow these steps 
--------------------------------------------------------------

1. In your terminal, navigate to the /tailwind-files folder located in this directory
2. Depending on your OS, run one of the following commands. 
      
    LINUX: ./tailwincss-linux-x64 -i input.css -o output.css --watch

    WINDOWS: tailwincss-linux-x64 -i input.css -o output.css --watch

    MACOS: ./tailwincss-macos-arm64 -i input.css -o output.css --watch
      Note: This exectuable ONLY works on ARM based macOS machines. Intel based macOS machines won't be able to run this.
      Go on the Tailwindcss Github -> Releases to find the Intel based one. 

--------------------------------------------------------------

  Note: If on Linux or macOS you might have to give the program execute permissions.
  Run the following in your terminal if you can't seem to run the program. (Works for both Linux & MacOS)

    chmod +x FILENAME (FILENAME depends on what OS you're on. tailwindcss-linux-x64 if on Linux,
    tailwincss-macos-arm64 if on MacOS)

--------------------------------------------------------------

If you see the following when you run the command, Tailwindcss is now running on your machine!

Rebuilding...

Done in 166ms.

--------------------------------------------------------------

As you code the website, make sure to use the tailwindcss forum (https://tailwindcss.com/docs/installation)
to see how to use Tailwind's syntax to write beautiful CSS code. Good luck bruther