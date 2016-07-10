'use strict';

var responsive_videos = {
    audio: {
        options: {
            sizes: [
                {
                    width: 950
                }
            ],
            encodes:[
                {
                    webm: [
                        {
                            '-vcodec': 'libvpx'
                        },
                        {
                            '-acodec': 'libvorbis'
                        },
                        {
                            '-cpu-used': '0'
                        },
                        {
                            '-b:v': '500k'
                        },
                        {
                            '-qmax': '42'
                        },
                        {
                            '-maxrate': '500k'
                        },
                        {
                            '-bufsize': '1000k'
                        },
                        {
                            '-threads': '0'
                        }
                    ],
                    mp4: [
                        {
                            '-vcodec': 'libx264'
                        }
                    ]
                }
            ]
        },
        files: [
            {
                expand: true,
                src: ['**/*.{mp4,mov}'],
                cwd: '<%= path.public %>/<%= path.videos %>/audio_raw',
                dest: '<%= path.public %>/<%= path.videos %>/audio'
            }
        ]
    },
    mute: {
        options: {
            sizes: [
                {
                    width: 320
                },
                {
                    width: 640
                },
                {
                    width: 1080
                }
            ],
            encodes: [
                {
                    webm: [
                        {
                            '-vcodec': 'libvpx'
                        },
                        {
                            '-acodec': 'libvorbis'
                        },
                        {
                            '-cpu-used': '0'
                        },
                        {
                            '-b:v': '500k'
                        },
                        {
                            '-qmax': '42'
                        },
                        {
                            '-maxrate': '500k'
                        },
                        {
                            '-bufsize': '1000k'
                        },
                        {
                            '-threads': '0'
                        },
                        {
                            '-an': '-an'
                        }
                    ],
                    mp4: [
                        {
                            '-vcodec': 'libx264'
                        },
                        {
                            '-acodec': 'libfaac'
                        },
                        {
                            '-pix_fmt': 'yuv420p'
                        },
                        {
                            '-q:v': '4'
                        },
                        {
                            '-q:a': '100'
                        },
                        {
                            '-threads': '0'
                        },
                        {
                            '-an': '-an'
                        }
                    ]
                }
            ]
        },
        files: [
            {
                expand: true,
                src: ['**/*.{mp4,mov}'],
                cwd: '<%= path.public %>/<%= path.videos %>/mute_raw',
                dest: '<%= path.public %>/<%= path.videos %>/mute'
            }
        ]
    }
};

module.exports = responsive_videos;
