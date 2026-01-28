(function() {
  'use strict';

  // Body parts data with muscles
  const bodyPartsData = {
    'head-neck': {
      name: 'Head & Neck',
      muscles: [
        {
          id: 'sternocleidomastoid',
          name: 'Sternocleidomastoid',
          function: 'Rotates and flexes the neck',
          role: 'Responsible for turning the head side to side and tilting the chin down toward the chest',
          location: 'Front and side of the neck'
        },
        {
          id: 'trapezius-upper',
          name: 'Upper Trapezius',
          function: 'Elevates and rotates the shoulder blade',
          role: 'Supports head movement and shoulder elevation, commonly involved in shrugging motions',
          location: 'Back of neck extending to shoulders'
        }
      ]
    },
    'chest': {
      name: 'Chest',
      muscles: [
        {
          id: 'pectoralis-major',
          name: 'Pectoralis Major',
          function: 'Horizontal adduction, flexion, and internal rotation of the arm',
          role: 'Primary muscle for pushing movements like bench press and push-ups',
          location: 'Large fan-shaped muscle covering upper chest'
        },
        {
          id: 'pectoralis-minor',
          name: 'Pectoralis Minor',
          function: 'Stabilizes and depresses the shoulder blade',
          role: 'Assists in pulling the shoulder forward and downward, supports breathing',
          location: 'Beneath the pectoralis major, attached to ribs 3-5'
        },
        {
          id: 'serratus-anterior',
          name: 'Serratus Anterior',
          function: 'Protracts and stabilizes the scapula',
          role: 'Essential for pushing movements and overhead pressing, prevents winging of the scapula',
          location: 'Side of chest, along the ribs'
        }
      ]
    },
    'back': {
      name: 'Back',
      muscles: [
        {
          id: 'latissimus-dorsi',
          name: 'Latissimus Dorsi',
          function: 'Adduction, extension, and internal rotation of the arm',
          role: 'Primary muscle for pulling movements like pull-ups and rows',
          location: 'Large muscle spanning mid to lower back'
        },
        {
          id: 'rhomboids',
          name: 'Rhomboids',
          function: 'Retracts and elevates the scapula',
          role: 'Pulls shoulder blades together, important for posture',
          location: 'Between the spine and shoulder blades'
        },
        {
          id: 'erector-spinae',
          name: 'Erector Spinae',
          function: 'Extends and stabilizes the spine',
          role: 'Maintains upright posture and assists in bending and lifting',
          location: 'Runs along both sides of the spine'
        },
        {
          id: 'trapezius-mid',
          name: 'Middle Trapezius',
          function: 'Retracts the scapula',
          role: 'Pulls shoulder blades back, crucial for rowing movements',
          location: 'Middle portion of the upper back'
        }
      ]
    },
    'shoulders': {
      name: 'Shoulders',
      muscles: [
        {
          id: 'anterior-deltoid',
          name: 'Anterior Deltoid',
          function: 'Flexion and internal rotation of the arm',
          role: 'Front portion of shoulder, involved in pressing and raising movements',
          location: 'Front of the shoulder'
        },
        {
          id: 'lateral-deltoid',
          name: 'Lateral Deltoid',
          function: 'Abduction of the arm',
          role: 'Middle portion responsible for raising arm to the side',
          location: 'Side of the shoulder'
        },
        {
          id: 'posterior-deltoid',
          name: 'Posterior Deltoid',
          function: 'Extension and external rotation of the arm',
          role: 'Rear portion involved in pulling movements and shoulder stability',
          location: 'Back of the shoulder'
        },
        {
          id: 'rotator-cuff',
          name: 'Rotator Cuff',
          function: 'Stabilizes the shoulder joint',
          role: 'Group of four muscles that keep the shoulder stable during movement',
          location: 'Deep within the shoulder, surrounding the joint'
        }
      ]
    },
    'arms': {
      name: 'Arms',
      muscles: [
        {
          id: 'biceps-brachii',
          name: 'Biceps Brachii',
          function: 'Flexion of the elbow and supination of the forearm',
          role: 'Primary muscle for curling movements and turning palm upward',
          location: 'Front of upper arm'
        },
        {
          id: 'triceps-brachii',
          name: 'Triceps Brachii',
          function: 'Extension of the elbow',
          role: 'Primary muscle for straightening the arm, crucial for pushing',
          location: 'Back of upper arm'
        },
        {
          id: 'brachialis',
          name: 'Brachialis',
          function: 'Flexion of the elbow',
          role: 'Strong elbow flexor that works beneath the biceps',
          location: 'Beneath biceps, visible on outer arm'
        },
        {
          id: 'forearm-flexors',
          name: 'Forearm Flexors',
          function: 'Flexion of the wrist and fingers',
          role: 'Control grip strength and wrist curling movements',
          location: 'Inner forearm'
        },
        {
          id: 'forearm-extensors',
          name: 'Forearm Extensors',
          function: 'Extension of the wrist and fingers',
          role: 'Control wrist extension and assist in grip',
          location: 'Outer forearm'
        }
      ]
    },
    'core': {
      name: 'Core',
      muscles: [
        {
          id: 'rectus-abdominis',
          name: 'Rectus Abdominis',
          function: 'Flexion of the trunk',
          role: 'The "six-pack" muscle, responsible for crunching motions',
          location: 'Front of abdomen, from ribs to pelvis'
        },
        {
          id: 'obliques',
          name: 'Obliques',
          function: 'Rotation and lateral flexion of the trunk',
          role: 'Twisting movements and side bending, supports the spine',
          location: 'Sides of the abdomen'
        },
        {
          id: 'transverse-abdominis',
          name: 'Transverse Abdominis',
          function: 'Compresses the abdomen and stabilizes the spine',
          role: 'Deep core stabilizer, acts like a natural weight belt',
          location: 'Deepest abdominal muscle, wraps around torso'
        }
      ]
    },
    'glutes': {
      name: 'Glutes & Hips',
      muscles: [
        {
          id: 'gluteus-maximus',
          name: 'Gluteus Maximus',
          function: 'Extension and external rotation of the hip',
          role: 'Largest and most powerful muscle, essential for standing, walking, and jumping',
          location: 'Main mass of the buttocks'
        },
        {
          id: 'gluteus-medius',
          name: 'Gluteus Medius',
          function: 'Abduction and stabilization of the hip',
          role: 'Stabilizes pelvis during walking and running',
          location: 'Upper outer buttock'
        },
        {
          id: 'hip-flexors',
          name: 'Hip Flexors',
          function: 'Flexion of the hip',
          role: 'Lifts the thigh toward the torso, important for walking and running',
          location: 'Front of hip, connecting spine to femur'
        }
      ]
    },
    'legs': {
      name: 'Legs',
      muscles: [
        {
          id: 'quadriceps',
          name: 'Quadriceps',
          function: 'Extension of the knee and flexion of the hip',
          role: 'Four-muscle group on front of thigh, essential for squatting and jumping',
          location: 'Front of the thigh'
        },
        {
          id: 'hamstrings',
          name: 'Hamstrings',
          function: 'Flexion of the knee and extension of the hip',
          role: 'Three-muscle group on back of thigh, crucial for running and jumping',
          location: 'Back of the thigh'
        },
        {
          id: 'adductors',
          name: 'Adductors',
          function: 'Adduction of the thigh',
          role: 'Brings legs together, stabilizes during lateral movements',
          location: 'Inner thigh'
        },
        {
          id: 'calves',
          name: 'Calves (Gastrocnemius & Soleus)',
          function: 'Plantar flexion of the ankle',
          role: 'Points the toes down, essential for walking, running, and jumping',
          location: 'Back of lower leg'
        },
        {
          id: 'tibialis-anterior',
          name: 'Tibialis Anterior',
          function: 'Dorsiflexion of the ankle',
          role: 'Lifts the toes up, controls foot during walking',
          location: 'Front of the shin'
        }
      ]
    }
  };

  // Exercises data for each muscle
  const exercisesData = {
    'sternocleidomastoid': [
      {
        id: 'neck-flexion',
        name: 'Neck Flexion',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Sternocleidomastoid',
        description: 'A simple exercise to strengthen the front neck muscles by tucking the chin and flexing the neck forward.',
        steps: [
          'Sit or stand with good posture, shoulders back',
          'Slowly tuck your chin toward your chest',
          'Hold the position for 5-10 seconds',
          'Slowly return to the starting position',
          'Repeat for the desired number of repetitions'
        ],
        sets: '2-3',
        reps: '10-15',
        rest: '30-60 seconds',
        breathing: 'Breathe naturally throughout the movement',
        tips: [
          'Keep movements slow and controlled',
          'Avoid jerky or rapid movements',
          'Stop if you feel any sharp pain',
          'Keep shoulders relaxed throughout'
        ]
      },
      {
        id: 'neck-rotation',
        name: 'Neck Rotation',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Sternocleidomastoid',
        description: 'Gentle rotation exercise to improve neck mobility and strengthen the rotating muscles.',
        steps: [
          'Sit or stand with neutral spine alignment',
          'Slowly turn your head to look over your right shoulder',
          'Hold for 5 seconds',
          'Return to center and repeat to the left side',
          'Complete all repetitions on both sides'
        ],
        sets: '2-3',
        reps: '8-10 each side',
        rest: '30 seconds',
        breathing: 'Exhale as you rotate, inhale as you return to center',
        tips: [
          'Keep your shoulders still - only move your head',
          'Move through a comfortable range of motion',
          'Do not force the stretch',
          'Perform daily for best results'
        ]
      }
    ],
    'trapezius-upper': [
      {
        id: 'barbell-shrug',
        name: 'Barbell Shrug',
        difficulty: 'Beginner',
        equipment: 'Barbell',
        targetMuscle: 'Upper Trapezius',
        description: 'A classic exercise for building upper trap mass by elevating the shoulders against resistance.',
        steps: [
          'Stand holding a barbell with an overhand grip, arms extended',
          'Position feet shoulder-width apart, core engaged',
          'Elevate your shoulders straight up toward your ears',
          'Squeeze at the top for 1-2 seconds',
          'Lower the weight slowly back to the starting position'
        ],
        sets: '3-4',
        reps: '10-15',
        rest: '60-90 seconds',
        breathing: 'Exhale as you shrug up, inhale as you lower',
        tips: [
          'Keep arms straight - do not bend elbows',
          'Avoid rolling shoulders forward or backward',
          'Use a weight you can control through full range',
          'Focus on the squeeze at the top'
        ]
      },
      {
        id: 'dumbbell-shrug',
        name: 'Dumbbell Shrug',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Upper Trapezius',
        description: 'A shrug variation using dumbbells for greater range of motion and unilateral development.',
        steps: [
          'Stand holding a dumbbell in each hand at your sides',
          'Keep feet hip-width apart and core braced',
          'Raise your shoulders as high as possible',
          'Hold the contraction briefly at the top',
          'Lower the dumbbells with control'
        ],
        sets: '3-4',
        reps: '12-15',
        rest: '60 seconds',
        breathing: 'Exhale during the shrug, inhale on the way down',
        tips: [
          'Let the dumbbells hang naturally - dont pull them forward',
          'Keep your neck neutral - dont tuck chin',
          'Use straps if grip becomes limiting',
          'Can be performed seated for stricter form'
        ]
      }
    ],
    'pectoralis-major': [
      {
        id: 'bench-press',
        name: 'Barbell Bench Press',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Pectoralis Major',
        description: 'The king of chest exercises, the bench press is a compound movement that builds overall chest mass and pressing strength.',
        steps: [
          'Lie on a flat bench with eyes under the bar',
          'Grip the bar slightly wider than shoulder width',
          'Unrack the bar and position it over your chest',
          'Lower the bar to mid-chest with elbows at about 45 degrees',
          'Press the bar back up to the starting position'
        ],
        sets: '3-4',
        reps: '6-12',
        rest: '90-120 seconds',
        breathing: 'Inhale as you lower the bar, exhale as you press up',
        tips: [
          'Keep shoulder blades pinched together throughout',
          'Maintain a slight arch in your lower back',
          'Keep feet flat on the floor for stability',
          'Do not bounce the bar off your chest',
          'Always use a spotter when lifting heavy'
        ]
      },
      {
        id: 'push-up',
        name: 'Push-Up',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Pectoralis Major',
        description: 'A foundational bodyweight exercise that develops chest, shoulder, and triceps strength.',
        steps: [
          'Start in a high plank position with hands slightly wider than shoulders',
          'Keep your body in a straight line from head to heels',
          'Lower your chest toward the floor by bending your elbows',
          'Go down until your chest nearly touches the ground',
          'Push back up to the starting position'
        ],
        sets: '3-4',
        reps: '10-20',
        rest: '60 seconds',
        breathing: 'Inhale going down, exhale pushing up',
        tips: [
          'Keep your core tight to prevent hip sagging',
          'Do not flare elbows out to 90 degrees - keep them closer to body',
          'Look slightly ahead, not straight down',
          'Modify on knees if needed to maintain proper form'
        ]
      },
      {
        id: 'dumbbell-fly',
        name: 'Dumbbell Fly',
        difficulty: 'Intermediate',
        equipment: 'Dumbbell',
        targetMuscle: 'Pectoralis Major',
        description: 'An isolation exercise that stretches and contracts the chest through a wide arc of motion.',
        steps: [
          'Lie on a flat bench holding dumbbells above your chest',
          'Keep a slight bend in your elbows throughout',
          'Lower the dumbbells out to the sides in a wide arc',
          'Go down until you feel a stretch in your chest',
          'Squeeze your chest to bring the weights back together'
        ],
        sets: '3',
        reps: '10-15',
        rest: '60 seconds',
        breathing: 'Inhale as you open arms, exhale as you bring them together',
        tips: [
          'Use lighter weight than pressing movements',
          'Focus on the stretch at the bottom',
          'Do not let elbows drop below shoulder level',
          'Imagine hugging a large tree'
        ]
      },
      {
        id: 'incline-bench-press',
        name: 'Incline Bench Press',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Pectoralis Major (Upper)',
        description: 'A bench press variation targeting the upper chest with an inclined angle.',
        steps: [
          'Set bench to 30-45 degree incline',
          'Lie back and grip the bar slightly wider than shoulders',
          'Unrack and lower the bar to upper chest',
          'Press the bar back up in a slight arc',
          'Lock out at the top and repeat'
        ],
        sets: '3-4',
        reps: '8-12',
        rest: '90 seconds',
        breathing: 'Inhale lowering, exhale pressing',
        tips: [
          'Do not set the incline too steep - 30-45 degrees is optimal',
          'Keep shoulder blades retracted',
          'Touch the bar higher on your chest than flat bench',
          'Control the weight throughout'
        ]
      }
    ],
    'pectoralis-minor': [
      {
        id: 'dip',
        name: 'Chest Dip',
        difficulty: 'Intermediate',
        equipment: 'Bodyweight',
        targetMuscle: 'Pectoralis Minor',
        description: 'A compound pushing exercise performed on parallel bars that heavily engages the lower chest and pec minor.',
        steps: [
          'Grip parallel bars and lift yourself to the starting position',
          'Lean your torso forward about 30 degrees',
          'Lower your body by bending your elbows',
          'Go down until you feel a stretch in your chest',
          'Push back up to the starting position'
        ],
        sets: '3',
        reps: '8-12',
        rest: '90 seconds',
        breathing: 'Inhale as you descend, exhale as you push up',
        tips: [
          'Lean forward to emphasize chest over triceps',
          'Do not go too deep if you have shoulder issues',
          'Keep core tight throughout',
          'Add weight with a dip belt once bodyweight becomes easy'
        ]
      }
    ],
    'serratus-anterior': [
      {
        id: 'push-up-plus',
        name: 'Push-Up Plus',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Serratus Anterior',
        description: 'A push-up variation with an extra push at the top to protract the scapula and target the serratus.',
        steps: [
          'Start in a standard push-up position',
          'Perform a regular push-up',
          'At the top, push further to round your upper back',
          'Feel your shoulder blades spread apart',
          'Return to normal push-up position and repeat'
        ],
        sets: '3',
        reps: '10-15',
        rest: '60 seconds',
        breathing: 'Exhale during the extra push at the top',
        tips: [
          'Focus on the protraction (spreading) of shoulder blades',
          'Keep arms straight during the plus phase',
          'This can also be done on knees or against a wall',
          'Great for improving shoulder health'
        ]
      }
    ],
    'latissimus-dorsi': [
      {
        id: 'pull-up',
        name: 'Pull-Up',
        difficulty: 'Intermediate',
        equipment: 'Bodyweight',
        targetMuscle: 'Latissimus Dorsi',
        description: 'The ultimate back exercise that builds a wide, powerful lat spread using your body weight.',
        steps: [
          'Hang from a pull-up bar with hands wider than shoulders',
          'Engage your core and depress your shoulders',
          'Pull yourself up by driving elbows down and back',
          'Continue until chin clears the bar',
          'Lower yourself with control to full arm extension'
        ],
        sets: '3-4',
        reps: '6-12',
        rest: '90-120 seconds',
        breathing: 'Exhale as you pull up, inhale as you lower',
        tips: [
          'Initiate the pull by engaging lats, not biceps',
          'Keep your body relatively straight - avoid swinging',
          'Full range of motion is key - dead hang to chin over bar',
          'Use assistance bands if you cannot complete reps'
        ]
      },
      {
        id: 'lat-pulldown',
        name: 'Lat Pulldown',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Latissimus Dorsi',
        description: 'A machine exercise that mimics the pull-up motion with adjustable resistance.',
        steps: [
          'Sit at a lat pulldown machine and adjust thigh pads',
          'Grip the bar wider than shoulder width',
          'Lean back slightly and pull the bar to upper chest',
          'Squeeze your lats at the bottom',
          'Control the bar back up to full extension'
        ],
        sets: '3-4',
        reps: '10-12',
        rest: '60-90 seconds',
        breathing: 'Exhale pulling down, inhale releasing up',
        tips: [
          'Do not pull the bar behind your neck',
          'Lead with your elbows, not your hands',
          'Avoid using momentum - control the movement',
          'Squeeze shoulder blades together at the bottom'
        ]
      },
      {
        id: 'barbell-row',
        name: 'Barbell Bent-Over Row',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Latissimus Dorsi',
        description: 'A fundamental compound rowing movement for building back thickness.',
        steps: [
          'Stand with feet hip-width apart, holding a barbell',
          'Hinge at hips until torso is nearly parallel to floor',
          'Let the bar hang with arms extended',
          'Pull the bar to your lower chest/upper abdomen',
          'Lower with control and repeat'
        ],
        sets: '3-4',
        reps: '8-12',
        rest: '90 seconds',
        breathing: 'Exhale as you row up, inhale as you lower',
        tips: [
          'Keep your back flat - do not round',
          'Maintain the hip hinge throughout',
          'Pull to your belly button area',
          'Squeeze shoulder blades together at the top'
        ]
      }
    ],
    'rhomboids': [
      {
        id: 'face-pull',
        name: 'Face Pull',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Rhomboids',
        description: 'A cable exercise that targets the rear delts and rhomboids while improving posture.',
        steps: [
          'Set a cable pulley to face height with rope attachment',
          'Grip the rope with thumbs pointing back',
          'Pull the rope toward your face',
          'Separate your hands and squeeze shoulder blades',
          'Return with control and repeat'
        ],
        sets: '3',
        reps: '15-20',
        rest: '45-60 seconds',
        breathing: 'Exhale as you pull, inhale as you release',
        tips: [
          'Keep elbows high throughout the movement',
          'Focus on squeezing shoulder blades together',
          'Use light weight - this is not a power movement',
          'Great for shoulder health and posture'
        ]
      },
      {
        id: 'seated-row',
        name: 'Seated Cable Row',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Rhomboids',
        description: 'A seated rowing movement that targets the middle back muscles.',
        steps: [
          'Sit at a cable row station with feet on the platform',
          'Grab the handle with arms extended',
          'Pull the handle to your abdomen',
          'Squeeze your shoulder blades together',
          'Extend arms back to the start with control'
        ],
        sets: '3-4',
        reps: '10-12',
        rest: '60 seconds',
        breathing: 'Exhale pulling in, inhale extending out',
        tips: [
          'Keep your torso stationary - dont lean back',
          'Lead with your elbows',
          'Squeeze at the fully contracted position',
          'Use full range of motion'
        ]
      }
    ],
    'erector-spinae': [
      {
        id: 'deadlift',
        name: 'Conventional Deadlift',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        targetMuscle: 'Erector Spinae',
        description: 'The ultimate posterior chain exercise that builds total body strength.',
        steps: [
          'Stand with feet hip-width apart, bar over mid-foot',
          'Bend and grip the bar just outside your legs',
          'Drop hips, lift chest, flatten back',
          'Drive through your heels and stand up with the bar',
          'Lock out hips and shoulders at the top'
        ],
        sets: '3-5',
        reps: '3-6',
        rest: '2-3 minutes',
        breathing: 'Take a big breath and brace before lifting, exhale at top',
        tips: [
          'Keep the bar close to your body throughout',
          'Do not round your lower back',
          'Push the floor away rather than pulling the bar up',
          'Master lighter weights before adding load'
        ]
      },
      {
        id: 'back-extension',
        name: 'Back Extension',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Erector Spinae',
        description: 'An isolation exercise for the lower back performed on a hyperextension bench.',
        steps: [
          'Position yourself on a back extension bench',
          'Cross arms over chest or behind head',
          'Lower your torso by bending at the waist',
          'Go down until you feel a stretch',
          'Raise back up until your body is in a straight line'
        ],
        sets: '3',
        reps: '12-15',
        rest: '60 seconds',
        breathing: 'Inhale going down, exhale coming up',
        tips: [
          'Do not hyperextend at the top',
          'Keep movement controlled',
          'Add weight by holding a plate to progress',
          'Focus on using lower back, not glutes'
        ]
      }
    ],
    'trapezius-mid': [
      {
        id: 'prone-y-raise',
        name: 'Prone Y-Raise',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Middle Trapezius',
        description: 'A floor exercise that targets the middle traps and improves scapular control.',
        steps: [
          'Lie face down on the floor or a bench',
          'Extend arms overhead in a Y position, thumbs up',
          'Raise arms off the ground by squeezing shoulder blades',
          'Hold briefly at the top',
          'Lower with control'
        ],
        sets: '3',
        reps: '12-15',
        rest: '45 seconds',
        breathing: 'Exhale as you raise, inhale lowering',
        tips: [
          'Keep neck neutral - dont look up',
          'Thumbs point to the ceiling',
          'Focus on using the mid-back, not arms',
          'Add light dumbbells to progress'
        ]
      }
    ],
    'anterior-deltoid': [
      {
        id: 'overhead-press',
        name: 'Overhead Press',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Anterior Deltoid',
        description: 'A fundamental pressing movement that builds shoulder strength and mass.',
        steps: [
          'Stand with feet shoulder-width apart, bar at collar bone',
          'Grip the bar just outside shoulder width',
          'Brace core and press the bar overhead',
          'Lock out arms at the top',
          'Lower the bar with control back to starting position'
        ],
        sets: '3-4',
        reps: '6-10',
        rest: '90 seconds',
        breathing: 'Exhale pressing up, inhale lowering down',
        tips: [
          'Keep your core tight to avoid excessive back arch',
          'Move your head back as the bar passes',
          'Lock out directly over mid-foot',
          'Keep wrists straight, not bent back'
        ]
      },
      {
        id: 'front-raise',
        name: 'Dumbbell Front Raise',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Anterior Deltoid',
        description: 'An isolation exercise that targets the front of the shoulder.',
        steps: [
          'Stand holding dumbbells in front of thighs',
          'Keep a slight bend in your elbows',
          'Raise one or both arms to shoulder height',
          'Pause briefly at the top',
          'Lower with control and repeat'
        ],
        sets: '3',
        reps: '12-15',
        rest: '45-60 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'Do not swing the weights - control the movement',
          'Stop at shoulder height - going higher uses traps',
          'Keep torso upright, no leaning back',
          'Can be done alternating or simultaneously'
        ]
      }
    ],
    'lateral-deltoid': [
      {
        id: 'lateral-raise',
        name: 'Dumbbell Lateral Raise',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Lateral Deltoid',
        description: 'The go-to exercise for building wider shoulders by targeting the side delts.',
        steps: [
          'Stand holding dumbbells at your sides',
          'Keep a slight bend in your elbows',
          'Raise arms out to the sides until shoulder height',
          'Lead with your elbows, not your hands',
          'Lower with control and repeat'
        ],
        sets: '3-4',
        reps: '12-15',
        rest: '45-60 seconds',
        breathing: 'Exhale as you raise, inhale as you lower',
        tips: [
          'Use lighter weight with strict form',
          'Think of pouring water from a pitcher at the top',
          'Keep traps relaxed - dont shrug',
          'Control the negative portion'
        ]
      },
      {
        id: 'cable-lateral-raise',
        name: 'Cable Lateral Raise',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Lateral Deltoid',
        description: 'A cable variation providing constant tension throughout the movement.',
        steps: [
          'Stand sideways to a low cable pulley',
          'Grab the handle with the far hand',
          'Keep slight elbow bend throughout',
          'Raise arm out to shoulder height',
          'Lower with control and repeat'
        ],
        sets: '3',
        reps: '12-15',
        rest: '45 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'The cable provides tension even at the bottom',
          'Keep your body still - no leaning',
          'Great finisher after dumbbell raises',
          'Do all reps on one side before switching'
        ]
      }
    ],
    'posterior-deltoid': [
      {
        id: 'reverse-fly',
        name: 'Reverse Dumbbell Fly',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Posterior Deltoid',
        description: 'An isolation exercise for the rear delts performed in a bent-over position.',
        steps: [
          'Hinge forward at hips with flat back',
          'Hold dumbbells hanging below chest',
          'Raise arms out to sides with slight elbow bend',
          'Squeeze rear delts at the top',
          'Lower with control'
        ],
        sets: '3',
        reps: '12-15',
        rest: '45-60 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'Keep torso angle constant throughout',
          'Lead with elbows, not hands',
          'Use light weight - rear delts are small',
          'Can be done seated for more stability'
        ]
      },
      {
        id: 'rear-delt-row',
        name: 'Rear Delt Cable Row',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Posterior Deltoid',
        description: 'A cable row variation with high elbows to emphasize rear deltoids.',
        steps: [
          'Set cable to shoulder height with rope attachment',
          'Grip rope and step back for tension',
          'Pull rope toward your face with elbows high',
          'Separate the rope ends at the finish',
          'Return with control'
        ],
        sets: '3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Exhale pulling, inhale releasing',
        tips: [
          'Keep elbows at or above shoulder height',
          'Squeeze shoulder blades together',
          'Control the eccentric portion',
          'This is also great for the face pull movement pattern'
        ]
      }
    ],
    'rotator-cuff': [
      {
        id: 'external-rotation',
        name: 'Cable External Rotation',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Rotator Cuff',
        description: 'An exercise to strengthen the external rotators of the shoulder for joint health.',
        steps: [
          'Set a cable to elbow height',
          'Stand sideways and grab handle with far hand',
          'Keep elbow pinned to your side at 90 degrees',
          'Rotate forearm outward against the cable',
          'Return with control'
        ],
        sets: '2-3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Breathe naturally throughout',
        tips: [
          'Use very light weight',
          'Keep elbow tucked against body',
          'Move only at the shoulder joint',
          'Great for warm-up or prehab'
        ]
      },
      {
        id: 'internal-rotation',
        name: 'Cable Internal Rotation',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Rotator Cuff',
        description: 'Strengthens the internal rotators of the shoulder.',
        steps: [
          'Set a cable to elbow height',
          'Stand sideways and grab handle with near hand',
          'Keep elbow pinned to your side at 90 degrees',
          'Rotate forearm inward across your body',
          'Return with control'
        ],
        sets: '2-3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Breathe naturally',
        tips: [
          'Balance this with external rotation work',
          'Keep elbow fixed at your side',
          'Light weight, high reps',
          'Important for shoulder stability'
        ]
      }
    ],
    'biceps-brachii': [
      {
        id: 'barbell-curl',
        name: 'Barbell Curl',
        difficulty: 'Beginner',
        equipment: 'Barbell',
        targetMuscle: 'Biceps Brachii',
        description: 'The classic mass-building exercise for the biceps.',
        steps: [
          'Stand holding a barbell with underhand grip',
          'Keep elbows pinned at your sides',
          'Curl the bar up toward your shoulders',
          'Squeeze the biceps at the top',
          'Lower with control to full extension'
        ],
        sets: '3-4',
        reps: '8-12',
        rest: '60-90 seconds',
        breathing: 'Exhale curling up, inhale lowering down',
        tips: [
          'Keep upper arms stationary throughout',
          'Do not swing the weight - use strict form',
          'Full range of motion for best results',
          'EZ bar is easier on wrists if needed'
        ]
      },
      {
        id: 'dumbbell-curl',
        name: 'Dumbbell Curl',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Biceps Brachii',
        description: 'A versatile curl variation allowing for supination and unilateral work.',
        steps: [
          'Stand holding dumbbells at your sides, palms forward',
          'Keep elbows close to your body',
          'Curl the dumbbells up toward your shoulders',
          'Squeeze at the top and supinate (rotate pinky up)',
          'Lower with control'
        ],
        sets: '3',
        reps: '10-12',
        rest: '60 seconds',
        breathing: 'Exhale curling up, inhale lowering',
        tips: [
          'Can be done alternating or simultaneously',
          'Supinate (turn palm up) as you curl',
          'Keep wrists straight',
          'Control the negative portion'
        ]
      },
      {
        id: 'hammer-curl',
        name: 'Hammer Curl',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Biceps Brachii',
        description: 'A curl variation with neutral grip that also targets the brachialis.',
        steps: [
          'Stand holding dumbbells with palms facing each other',
          'Keep elbows at your sides',
          'Curl the weights up maintaining neutral grip',
          'Squeeze at the top',
          'Lower under control'
        ],
        sets: '3',
        reps: '10-12',
        rest: '60 seconds',
        breathing: 'Exhale up, inhale down',
        tips: [
          'Neutral grip takes stress off wrists',
          'Great for forearm development too',
          'Keep thumbs pointing up throughout',
          'Can be done alternating or together'
        ]
      }
    ],
    'triceps-brachii': [
      {
        id: 'close-grip-bench',
        name: 'Close-Grip Bench Press',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Triceps Brachii',
        description: 'A bench press variation with narrow grip that emphasizes triceps.',
        steps: [
          'Lie on a flat bench and grip the bar shoulder-width or narrower',
          'Unrack and lower the bar to your lower chest',
          'Keep elbows tucked close to your body',
          'Press the bar back up to lockout',
          'Focus on using triceps to push'
        ],
        sets: '3-4',
        reps: '8-10',
        rest: '90 seconds',
        breathing: 'Inhale lowering, exhale pressing',
        tips: [
          'Do not go too narrow - shoulder width is fine',
          'Keep elbows tucked, not flared',
          'Touch lower on chest than regular bench',
          'Squeeze triceps hard at lockout'
        ]
      },
      {
        id: 'tricep-pushdown',
        name: 'Cable Tricep Pushdown',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Triceps Brachii',
        description: 'A cable isolation exercise for triceps development.',
        steps: [
          'Stand at a cable station with high pulley and bar attachment',
          'Grip the bar with overhand grip',
          'Keep elbows pinned at your sides',
          'Push the bar down until arms are fully extended',
          'Control the bar back up'
        ],
        sets: '3-4',
        reps: '12-15',
        rest: '45-60 seconds',
        breathing: 'Exhale pushing down, inhale releasing',
        tips: [
          'Do not let elbows drift forward',
          'Squeeze triceps hard at the bottom',
          'Use different attachments for variety',
          'Keep torso upright'
        ]
      },
      {
        id: 'skull-crusher',
        name: 'Skull Crusher',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Triceps Brachii',
        description: 'A lying tricep extension that stretches and contracts the triceps.',
        steps: [
          'Lie on a bench holding an EZ bar above your chest',
          'Keep upper arms perpendicular to the floor',
          'Lower the bar by bending elbows toward your forehead',
          'Stop just before the bar touches your head',
          'Extend arms back to starting position'
        ],
        sets: '3',
        reps: '10-12',
        rest: '60 seconds',
        breathing: 'Inhale lowering, exhale extending',
        tips: [
          'Keep upper arms still - only forearms move',
          'Lower to forehead or just behind head',
          'Use lighter weight for joint safety',
          'EZ bar is easier on wrists'
        ]
      }
    ],
    'brachialis': [
      {
        id: 'reverse-curl',
        name: 'Reverse Barbell Curl',
        difficulty: 'Beginner',
        equipment: 'Barbell',
        targetMuscle: 'Brachialis',
        description: 'A curl variation with overhand grip targeting the brachialis and forearms.',
        steps: [
          'Stand holding a barbell with overhand (pronated) grip',
          'Keep elbows at your sides',
          'Curl the bar up toward shoulders',
          'Squeeze at the top',
          'Lower with control'
        ],
        sets: '3',
        reps: '10-12',
        rest: '60 seconds',
        breathing: 'Exhale curling, inhale lowering',
        tips: [
          'Use lighter weight than regular curls',
          'Grip is palms down',
          'Great for forearm development',
          'Keep wrists straight'
        ]
      }
    ],
    'forearm-flexors': [
      {
        id: 'wrist-curl',
        name: 'Wrist Curl',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Forearm Flexors',
        description: 'An isolation exercise for the inner forearm muscles.',
        steps: [
          'Sit and rest forearms on thighs, wrists over knees',
          'Hold dumbbells with palms up',
          'Let wrists extend down, opening hands slightly',
          'Curl wrists up, gripping the weight',
          'Squeeze forearms at the top'
        ],
        sets: '3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Exhale curling, inhale releasing',
        tips: [
          'Use light weight for high reps',
          'Keep forearms stationary on thighs',
          'Can be done with barbell too',
          'Great for grip strength'
        ]
      }
    ],
    'forearm-extensors': [
      {
        id: 'reverse-wrist-curl',
        name: 'Reverse Wrist Curl',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Forearm Extensors',
        description: 'Targets the outer forearm muscles with wrist extension.',
        steps: [
          'Sit and rest forearms on thighs, palms down',
          'Let wrists hang over knees',
          'Extend wrists up, raising the back of hand',
          'Lower with control',
          'Repeat for desired reps'
        ],
        sets: '3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Exhale extending, inhale lowering',
        tips: [
          'Use very light weight',
          'Balance with wrist curls',
          'Important for elbow health',
          'Keep movements controlled'
        ]
      }
    ],
    'rectus-abdominis': [
      {
        id: 'crunch',
        name: 'Crunch',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Rectus Abdominis',
        description: 'A foundational ab exercise that targets the rectus abdominis through trunk flexion.',
        steps: [
          'Lie on your back with knees bent and feet flat',
          'Place hands behind your head or across chest',
          'Engage your core and curl your shoulders off the floor',
          'Lift until your shoulder blades clear the ground',
          'Lower back down with control'
        ],
        sets: '3',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Exhale as you crunch up, inhale lowering',
        tips: [
          'Do not pull on your neck',
          'Focus on curling your ribs toward pelvis',
          'Keep lower back pressed into the floor',
          'Small controlled movement is more effective than big swings'
        ]
      },
      {
        id: 'hanging-leg-raise',
        name: 'Hanging Leg Raise',
        difficulty: 'Intermediate',
        equipment: 'Bodyweight',
        targetMuscle: 'Rectus Abdominis',
        description: 'An advanced ab exercise performed while hanging from a bar.',
        steps: [
          'Hang from a pull-up bar with arms extended',
          'Keep legs together and straight',
          'Raise legs until parallel to the ground or higher',
          'Control the descent back to starting position',
          'Avoid swinging'
        ],
        sets: '3',
        reps: '10-15',
        rest: '60 seconds',
        breathing: 'Exhale raising legs, inhale lowering',
        tips: [
          'Keep movement controlled - no swinging',
          'Tilt pelvis up at the top for full contraction',
          'Bend knees if straight legs are too difficult',
          'Use ab straps if grip is limiting'
        ]
      },
      {
        id: 'plank',
        name: 'Plank',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Rectus Abdominis',
        description: 'An isometric core exercise that builds stability and endurance.',
        steps: [
          'Start in a push-up position on forearms',
          'Keep body in a straight line from head to heels',
          'Engage your core and squeeze glutes',
          'Hold the position for prescribed time',
          'Breathe steadily throughout'
        ],
        sets: '3',
        reps: '30-60 seconds',
        rest: '45 seconds',
        breathing: 'Breathe naturally, maintaining tension',
        tips: [
          'Do not let hips sag or pike up',
          'Keep shoulders directly over elbows',
          'Tuck chin slightly',
          'Progress by increasing hold time'
        ]
      }
    ],
    'obliques': [
      {
        id: 'bicycle-crunch',
        name: 'Bicycle Crunch',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Obliques',
        description: 'A dynamic ab exercise that combines rotation with cycling motion.',
        steps: [
          'Lie on your back with hands behind head',
          'Lift shoulders and feet off the ground',
          'Bring right elbow toward left knee while extending right leg',
          'Switch sides in a pedaling motion',
          'Continue alternating sides'
        ],
        sets: '3',
        reps: '15-20 each side',
        rest: '45 seconds',
        breathing: 'Exhale with each rotation',
        tips: [
          'Touch elbow to opposite knee',
          'Keep lower back pressed into floor',
          'Move slowly and deliberately',
          'Focus on the rotation, not speed'
        ]
      },
      {
        id: 'russian-twist',
        name: 'Russian Twist',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Obliques',
        description: 'A rotational exercise that targets the obliques and builds rotational power.',
        steps: [
          'Sit with knees bent and feet off the floor',
          'Lean back slightly to engage core',
          'Hold hands together or hold a weight',
          'Rotate torso to touch the floor on each side',
          'Alternate sides for all repetitions'
        ],
        sets: '3',
        reps: '15-20 each side',
        rest: '45 seconds',
        breathing: 'Exhale with each rotation',
        tips: [
          'Keep chest up throughout',
          'Rotate from the waist, not shoulders',
          'Feet can touch floor for easier version',
          'Add weight to progress'
        ]
      },
      {
        id: 'side-plank',
        name: 'Side Plank',
        difficulty: 'Intermediate',
        equipment: 'Bodyweight',
        targetMuscle: 'Obliques',
        description: 'An isometric exercise that targets the obliques and lateral core.',
        steps: [
          'Lie on your side propped on your elbow',
          'Stack feet on top of each other',
          'Raise hips to form a straight line',
          'Hold position keeping body aligned',
          'Switch sides and repeat'
        ],
        sets: '3 each side',
        reps: '20-45 seconds',
        rest: '30 seconds',
        breathing: 'Breathe steadily throughout hold',
        tips: [
          'Keep hips stacked - dont let them rotate',
          'Shoulder directly over elbow',
          'Top arm can be on hip or raised',
          'Bend knees for easier variation'
        ]
      }
    ],
    'transverse-abdominis': [
      {
        id: 'dead-bug',
        name: 'Dead Bug',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Transverse Abdominis',
        description: 'A core stability exercise that teaches proper bracing.',
        steps: [
          'Lie on back with arms extended toward ceiling',
          'Raise legs with knees bent at 90 degrees',
          'Press lower back into the floor',
          'Extend opposite arm and leg while maintaining back position',
          'Return and alternate sides'
        ],
        sets: '3',
        reps: '10-12 each side',
        rest: '45 seconds',
        breathing: 'Exhale as you extend, inhale returning',
        tips: [
          'Lower back must stay pressed into floor',
          'Move slowly with control',
          'Only extend as far as you can maintain back position',
          'Great for learning core bracing'
        ]
      },
      {
        id: 'stomach-vacuum',
        name: 'Stomach Vacuum',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Transverse Abdominis',
        description: 'An isometric exercise that strengthens the deepest ab muscle.',
        steps: [
          'Stand, kneel, or lie on your back',
          'Exhale completely, emptying your lungs',
          'Draw your belly button in toward your spine',
          'Hold this position for 15-30 seconds',
          'Breathe shallowly while holding, then release'
        ],
        sets: '3-5',
        reps: '15-30 second holds',
        rest: '30 seconds',
        breathing: 'Exhale completely before hold, breathe shallowly during',
        tips: [
          'Imagine trying to fit into tight pants',
          'Do not hold breath completely',
          'Practice consistently for results',
          'Great for waist tightening'
        ]
      }
    ],
    'gluteus-maximus': [
      {
        id: 'squat',
        name: 'Barbell Back Squat',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Gluteus Maximus',
        description: 'The king of lower body exercises, building overall leg and glute strength.',
        steps: [
          'Position bar on upper back, not neck',
          'Stand with feet shoulder-width or slightly wider',
          'Brace core and begin descent by pushing hips back',
          'Lower until thighs are at least parallel to floor',
          'Drive through feet to stand back up'
        ],
        sets: '3-5',
        reps: '5-10',
        rest: '2-3 minutes',
        breathing: 'Inhale and brace before descent, exhale at top',
        tips: [
          'Keep chest up throughout',
          'Knees track over toes',
          'Maintain neutral spine',
          'Push knees out, do not let them cave in'
        ]
      },
      {
        id: 'hip-thrust',
        name: 'Barbell Hip Thrust',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Gluteus Maximus',
        description: 'The best exercise for glute isolation and development.',
        steps: [
          'Sit on ground with upper back against a bench',
          'Roll a barbell over hips with pad for comfort',
          'Plant feet flat on floor, hip-width apart',
          'Drive hips up until body forms straight line',
          'Squeeze glutes at top, then lower with control'
        ],
        sets: '3-4',
        reps: '10-15',
        rest: '90 seconds',
        breathing: 'Exhale driving up, inhale lowering',
        tips: [
          'Tuck chin slightly at the top',
          'Do not hyperextend lower back',
          'Keep ribs down',
          'Squeeze glutes hard at lockout'
        ]
      },
      {
        id: 'romanian-deadlift',
        name: 'Romanian Deadlift',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Gluteus Maximus',
        description: 'A hip hinge movement that targets glutes and hamstrings.',
        steps: [
          'Stand holding barbell at hip level',
          'Keep slight bend in knees throughout',
          'Push hips back and lower bar along legs',
          'Go down until you feel hamstring stretch',
          'Drive hips forward to return to start'
        ],
        sets: '3-4',
        reps: '8-12',
        rest: '90 seconds',
        breathing: 'Inhale lowering, exhale standing',
        tips: [
          'Keep bar close to legs',
          'Do not round your back',
          'Feel the stretch in hamstrings',
          'Squeeze glutes at the top'
        ]
      }
    ],
    'gluteus-medius': [
      {
        id: 'side-lying-hip-abduction',
        name: 'Side-Lying Hip Abduction',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Gluteus Medius',
        description: 'An isolation exercise for the upper glute muscles.',
        steps: [
          'Lie on your side with legs stacked',
          'Rest head on lower arm',
          'Keep top leg straight',
          'Raise top leg toward ceiling',
          'Lower with control and repeat'
        ],
        sets: '3 each side',
        reps: '15-20',
        rest: '30 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'Keep hips stacked - do not roll back',
          'Lead with heel, not toe',
          'Do not raise too high',
          'Add ankle weight to progress'
        ]
      },
      {
        id: 'clamshell',
        name: 'Clamshell',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Gluteus Medius',
        description: 'A hip external rotation exercise that targets the glute med.',
        steps: [
          'Lie on side with knees bent at 45 degrees',
          'Keep feet together',
          'Raise top knee while keeping feet touching',
          'Open legs like a clamshell',
          'Lower with control'
        ],
        sets: '3 each side',
        reps: '15-20',
        rest: '30 seconds',
        breathing: 'Exhale opening, inhale closing',
        tips: [
          'Keep hips stacked and still',
          'Feel the burn in upper glute',
          'Add resistance band around knees to progress',
          'Great for hip stability'
        ]
      }
    ],
    'hip-flexors': [
      {
        id: 'hanging-knee-raise',
        name: 'Hanging Knee Raise',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Hip Flexors',
        description: 'A hanging exercise that strengthens hip flexors and lower abs.',
        steps: [
          'Hang from a pull-up bar with arms extended',
          'Keep legs together',
          'Raise knees toward your chest',
          'Lower with control',
          'Avoid swinging'
        ],
        sets: '3',
        reps: '12-15',
        rest: '60 seconds',
        breathing: 'Exhale raising knees, inhale lowering',
        tips: [
          'Control the movement - no swinging',
          'Tuck pelvis at the top',
          'Use ab straps if grip is limiting',
          'Progress to straight leg raises'
        ]
      },
      {
        id: 'mountain-climber',
        name: 'Mountain Climber',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Hip Flexors',
        description: 'A dynamic exercise combining core stability with hip flexor work.',
        steps: [
          'Start in a push-up position',
          'Drive one knee toward chest',
          'Quickly switch legs',
          'Continue alternating at desired pace',
          'Keep hips level throughout'
        ],
        sets: '3',
        reps: '30-60 seconds',
        rest: '45 seconds',
        breathing: 'Breathe rhythmically with movement',
        tips: [
          'Keep core tight',
          'Do not let hips pike up',
          'Go slower for more control',
          'Can be done fast for cardio'
        ]
      }
    ],
    'quadriceps': [
      {
        id: 'leg-press',
        name: 'Leg Press',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Quadriceps',
        description: 'A machine exercise for building quad mass with back support.',
        steps: [
          'Sit in leg press with back flat against pad',
          'Place feet shoulder-width on platform',
          'Release safety and lower the weight',
          'Go down until knees are at 90 degrees',
          'Push through feet to extend legs'
        ],
        sets: '3-4',
        reps: '10-15',
        rest: '90 seconds',
        breathing: 'Inhale lowering, exhale pressing',
        tips: [
          'Do not let lower back round off the pad',
          'Keep knees in line with toes',
          'Do not lock out completely',
          'Different foot positions target different areas'
        ]
      },
      {
        id: 'leg-extension',
        name: 'Leg Extension',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Quadriceps',
        description: 'An isolation exercise for the quadriceps.',
        steps: [
          'Sit in machine with back against pad',
          'Hook ankles under the pad',
          'Extend legs until straight',
          'Squeeze quads at the top',
          'Lower with control'
        ],
        sets: '3',
        reps: '12-15',
        rest: '60 seconds',
        breathing: 'Exhale extending, inhale lowering',
        tips: [
          'Control the movement throughout',
          'Do not use momentum',
          'Squeeze hard at full extension',
          'Adjust seat so knee aligns with pivot point'
        ]
      },
      {
        id: 'lunge',
        name: 'Walking Lunge',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Quadriceps',
        description: 'A functional exercise that builds leg strength and balance.',
        steps: [
          'Stand tall with feet together',
          'Step forward into a lunge position',
          'Lower until both knees are at 90 degrees',
          'Push off front foot and step forward with back leg',
          'Continue walking forward alternating legs'
        ],
        sets: '3',
        reps: '10-12 each leg',
        rest: '60-90 seconds',
        breathing: 'Inhale lowering, exhale stepping forward',
        tips: [
          'Keep torso upright',
          'Front knee tracks over toes',
          'Do not let back knee slam into ground',
          'Add dumbbells or barbell to progress'
        ]
      }
    ],
    'hamstrings': [
      {
        id: 'leg-curl',
        name: 'Lying Leg Curl',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Hamstrings',
        description: 'An isolation exercise for the hamstrings.',
        steps: [
          'Lie face down on leg curl machine',
          'Position pad just above ankles',
          'Curl heels toward glutes',
          'Squeeze hamstrings at top',
          'Lower with control'
        ],
        sets: '3-4',
        reps: '10-15',
        rest: '60 seconds',
        breathing: 'Exhale curling, inhale lowering',
        tips: [
          'Keep hips pressed into pad',
          'Do not jerk the weight',
          'Full range of motion',
          'Try different machines for variety'
        ]
      },
      {
        id: 'nordic-curl',
        name: 'Nordic Hamstring Curl',
        difficulty: 'Advanced',
        equipment: 'Bodyweight',
        targetMuscle: 'Hamstrings',
        description: 'An advanced eccentric exercise for hamstring strength.',
        steps: [
          'Kneel on a pad with ankles secured',
          'Keep body straight from knees to head',
          'Slowly lower your body toward the ground',
          'Use hamstrings to control the descent',
          'Push off floor and use hamstrings to pull back up'
        ],
        sets: '3',
        reps: '4-8',
        rest: '90 seconds',
        breathing: 'Inhale lowering, exhale returning',
        tips: [
          'Focus on the slow eccentric phase',
          'Keep hips extended throughout',
          'Use hands to assist if needed',
          'Progress by lowering further before catching yourself'
        ]
      },
      {
        id: 'good-morning',
        name: 'Good Morning',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        targetMuscle: 'Hamstrings',
        description: 'A hip hinge exercise that stretches and strengthens the posterior chain.',
        steps: [
          'Place a barbell on your upper back like a squat',
          'Stand with feet shoulder-width apart',
          'Push hips back while keeping legs nearly straight',
          'Lower torso until nearly parallel to floor',
          'Drive hips forward to return to standing'
        ],
        sets: '3',
        reps: '8-12',
        rest: '90 seconds',
        breathing: 'Inhale going down, exhale standing up',
        tips: [
          'Keep back flat - do not round',
          'Slight knee bend is okay',
          'Feel the stretch in hamstrings',
          'Start with light weight to learn the pattern'
        ]
      }
    ],
    'adductors': [
      {
        id: 'adductor-machine',
        name: 'Adductor Machine',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Adductors',
        description: 'An isolation exercise for the inner thigh muscles.',
        steps: [
          'Sit in the adductor machine',
          'Place legs against the pads in the open position',
          'Squeeze legs together',
          'Hold briefly at the end',
          'Control the return to starting position'
        ],
        sets: '3',
        reps: '12-15',
        rest: '45-60 seconds',
        breathing: 'Exhale squeezing, inhale releasing',
        tips: [
          'Control the eccentric portion',
          'Do not let the weights slam',
          'Squeeze at the fully closed position',
          'Keep back flat against pad'
        ]
      },
      {
        id: 'sumo-squat',
        name: 'Sumo Squat',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        targetMuscle: 'Adductors',
        description: 'A wide-stance squat variation that emphasizes the inner thighs.',
        steps: [
          'Stand with feet wider than shoulder width, toes pointed out',
          'Hold a dumbbell between your legs',
          'Lower into a squat keeping chest up',
          'Go down until thighs are parallel or below',
          'Drive through heels to stand'
        ],
        sets: '3-4',
        reps: '10-15',
        rest: '60-90 seconds',
        breathing: 'Inhale lowering, exhale standing',
        tips: [
          'Keep knees tracking over toes',
          'Maintain upright torso',
          'Push knees out, do not let them cave',
          'Can use kettlebell or goblet position'
        ]
      }
    ],
    'calves': [
      {
        id: 'standing-calf-raise',
        name: 'Standing Calf Raise',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Calves',
        description: 'The primary exercise for building calf mass.',
        steps: [
          'Position shoulders under the pads of a calf raise machine',
          'Stand on the platform with balls of feet on edge',
          'Let heels drop below the platform for a stretch',
          'Push up onto toes as high as possible',
          'Lower with control and repeat'
        ],
        sets: '4-5',
        reps: '12-20',
        rest: '45-60 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'Full range of motion is crucial',
          'Pause at the top for a squeeze',
          'Control the eccentric',
          'Calves respond well to higher reps'
        ]
      },
      {
        id: 'seated-calf-raise',
        name: 'Seated Calf Raise',
        difficulty: 'Beginner',
        equipment: 'Machine',
        targetMuscle: 'Calves',
        description: 'Targets the soleus muscle with bent-knee position.',
        steps: [
          'Sit at a seated calf raise machine',
          'Place balls of feet on platform, pad on lower thighs',
          'Let heels drop for a stretch',
          'Raise heels as high as possible',
          'Lower with control'
        ],
        sets: '3-4',
        reps: '15-20',
        rest: '45 seconds',
        breathing: 'Exhale raising, inhale lowering',
        tips: [
          'This targets the soleus more than gastrocnemius',
          'Use both standing and seated for complete development',
          'Full range of motion',
          'Pause at the top'
        ]
      }
    ],
    'tibialis-anterior': [
      {
        id: 'tibialis-raise',
        name: 'Tibialis Raise',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        targetMuscle: 'Tibialis Anterior',
        description: 'Strengthens the front of the shin to balance calf development.',
        steps: [
          'Stand with back against a wall',
          'Walk feet out about 12 inches from wall',
          'Keeping heels on ground, lift toes toward shins',
          'Lower with control',
          'Repeat for desired reps'
        ],
        sets: '3',
        reps: '15-25',
        rest: '30 seconds',
        breathing: 'Exhale lifting toes, inhale lowering',
        tips: [
          'Keep heels in contact with ground',
          'Control the movement',
          'Can be done seated with weight on feet',
          'Important for ankle health and balance'
        ]
      }
    ]
  };

  // DOM Elements
  const bodyOverview = document.getElementById('bodyOverview');
  const muscleListView = document.getElementById('muscleList');
  const muscleDetailView = document.getElementById('muscleDetail');
  const exerciseDetailView = document.getElementById('exerciseDetail');

  const frontViewBtn = document.getElementById('frontViewBtn');
  const backViewBtn = document.getElementById('backViewBtn');
  const frontBodySvg = document.getElementById('frontBodySvg');
  const backBodySvg = document.getElementById('backBodySvg');

  const muscleListTitle = document.getElementById('muscleListTitle');
  const muscleListContent = document.getElementById('muscleListContent');
  const muscleDetailPartLink = document.getElementById('muscleDetailPartLink');
  const muscleDetailTitle = document.getElementById('muscleDetailTitle');
  const muscleDetailContent = document.getElementById('muscleDetailContent');
  const exerciseDetailPartLink = document.getElementById('exerciseDetailPartLink');
  const exerciseDetailMuscleLink = document.getElementById('exerciseDetailMuscleLink');
  const exerciseDetailTitle = document.getElementById('exerciseDetailTitle');
  const exerciseDetailContent = document.getElementById('exerciseDetailContent');

  // State
  let currentPart = null;
  let currentMuscle = null;

  // View switching
  function showView(viewId) {
    [bodyOverview, muscleListView, muscleDetailView, exerciseDetailView].forEach(view => {
      view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
  }

  // Body view toggle
  frontViewBtn.addEventListener('click', function() {
    frontViewBtn.classList.add('active');
    backViewBtn.classList.remove('active');
    frontBodySvg.style.display = 'block';
    backBodySvg.style.display = 'none';
  });

  backViewBtn.addEventListener('click', function() {
    backViewBtn.classList.add('active');
    frontViewBtn.classList.remove('active');
    backBodySvg.style.display = 'block';
    frontBodySvg.style.display = 'none';
  });

  // Body part click handlers
  document.querySelectorAll('.body-part').forEach(part => {
    part.addEventListener('click', function() {
      const partId = this.getAttribute('data-part');
      showMuscleList(partId);
    });
  });

  // Show muscle list for a body part
  function showMuscleList(partId) {
    currentPart = partId;
    const partData = bodyPartsData[partId];

    if (!partData) return;

    muscleListTitle.textContent = partData.name;
    muscleListContent.innerHTML = '';

    partData.muscles.forEach(muscle => {
      const card = document.createElement('div');
      card.className = 'muscle-card';
      card.innerHTML = `
        <h3>${muscle.name}</h3>
        <p>${muscle.function}</p>
        <span class="muscle-location">${muscle.location}</span>
      `;
      card.addEventListener('click', () => showMuscleDetail(muscle));
      muscleListContent.appendChild(card);
    });

    showView('muscleList');
  }

  // Show muscle detail
  function showMuscleDetail(muscle) {
    currentMuscle = muscle;
    const partData = bodyPartsData[currentPart];

    muscleDetailPartLink.textContent = partData.name;
    muscleDetailTitle.textContent = muscle.name;

    const exercises = exercisesData[muscle.id] || [];

    let exerciseListHTML = '';
    exercises.forEach(ex => {
      const difficultyClass = ex.difficulty.toLowerCase();
      exerciseListHTML += `
        <div class="exercise-card" data-exercise-id="${ex.id}">
          <div class="exercise-card-main">
            <h4>${ex.name}</h4>
            <div class="exercise-tags">
              <span class="exercise-tag tag-difficulty ${difficultyClass}">${ex.difficulty}</span>
              <span class="exercise-tag tag-equipment">${ex.equipment}</span>
            </div>
          </div>
          <span class="exercise-card-arrow">&#8250;</span>
        </div>
      `;
    });

    muscleDetailContent.innerHTML = `
      <div class="muscle-detail-header">
        <h2>${muscle.name}</h2>
      </div>
      <div class="muscle-info-grid">
        <div class="muscle-info-box">
          <h4>Primary Function</h4>
          <p>${muscle.function}</p>
        </div>
        <div class="muscle-info-box">
          <h4>Role in Movement</h4>
          <p>${muscle.role}</p>
        </div>
        <div class="muscle-info-box">
          <h4>Location</h4>
          <p>${muscle.location}</p>
        </div>
      </div>
      <div class="exercises-section">
        <h3>Exercises for ${muscle.name}</h3>
        <div class="exercise-list">
          ${exerciseListHTML || '<p>No exercises available for this muscle yet.</p>'}
        </div>
      </div>
    `;

    // Add click handlers to exercise cards
    muscleDetailContent.querySelectorAll('.exercise-card').forEach(card => {
      card.addEventListener('click', function() {
        const exId = this.getAttribute('data-exercise-id');
        const exercise = exercises.find(e => e.id === exId);
        if (exercise) showExerciseDetail(exercise);
      });
    });

    showView('muscleDetail');
  }

  // Show exercise detail
  function showExerciseDetail(exercise) {
    const partData = bodyPartsData[currentPart];

    exerciseDetailPartLink.textContent = partData.name;
    exerciseDetailMuscleLink.textContent = currentMuscle.name;
    exerciseDetailTitle.textContent = exercise.name;

    const difficultyClass = exercise.difficulty.toLowerCase();

    let stepsHTML = '';
    exercise.steps.forEach(step => {
      stepsHTML += `<li>${step}</li>`;
    });

    let tipsHTML = '';
    exercise.tips.forEach(tip => {
      tipsHTML += `<li>${tip}</li>`;
    });

    exerciseDetailContent.innerHTML = `
      <div class="exercise-detail-header">
        <h2>${exercise.name}</h2>
        <div class="exercise-meta">
          <span class="exercise-tag tag-difficulty ${difficultyClass}">${exercise.difficulty}</span>
          <span class="exercise-tag tag-equipment">${exercise.equipment}</span>
        </div>
      </div>

      <div class="exercise-section">
        <h3>Description</h3>
        <p>${exercise.description}</p>
      </div>

      <div class="exercise-section">
        <h3>Step-by-Step Instructions</h3>
        <ol class="step-list">
          ${stepsHTML}
        </ol>
      </div>

      <div class="exercise-section">
        <h3>Recommended Programming</h3>
        <div class="recommendation-grid">
          <div class="rec-item">
            <div class="rec-value">${exercise.sets}</div>
            <div class="rec-label">Sets</div>
          </div>
          <div class="rec-item">
            <div class="rec-value">${exercise.reps}</div>
            <div class="rec-label">Reps</div>
          </div>
          <div class="rec-item">
            <div class="rec-value">${exercise.rest}</div>
            <div class="rec-label">Rest</div>
          </div>
        </div>
      </div>

      <div class="exercise-section">
        <h3>Breathing</h3>
        <p>${exercise.breathing}</p>
      </div>

      <div class="exercise-section">
        <h3>Tips & Common Mistakes to Avoid</h3>
        <ul class="tips-list">
          ${tipsHTML}
        </ul>
      </div>
    `;

    showView('exerciseDetail');
  }

  // Breadcrumb navigation
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('breadcrumb-item')) {
      const view = e.target.getAttribute('data-view');
      if (view === 'bodyOverview') {
        showView('bodyOverview');
      } else if (view === 'muscleList') {
        showView('muscleList');
      } else if (view === 'muscleDetail') {
        showView('muscleDetail');
      }
    }
  });

  // Initialize ads
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch(e) {}

})();
