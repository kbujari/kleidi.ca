#!/bin/bash

if which cwebp 2>/dev/null; then
  echo "Found cwebp, recompressing all source photos."
  rm static/gallery/*.webp
  for file in static/gallery/*.jpg; do 
    echo compressing $file into webp 
    cwebp -quiet -q 50 $file -o $file.webp 
  done
else
  echo "cwebp conversion tool not found, using existing photos"
fi