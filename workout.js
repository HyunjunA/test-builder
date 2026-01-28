(function() {
  'use strict';

  // ==========================================
  // EXERCISE DATABASE - Bodyweight Only
  // ==========================================
  const exerciseData = {
    chest: {
      name: 'Chest',
      subtitle: 'Bodyweight exercises to build a powerful chest',
      beginner: [
        {
          id: 'wall-pushup',
          name: 'Wall Push-Up',
          icon: '🧱',
          targetMuscles: 'Chest, Shoulders, Triceps',
          sets: '3',
          reps: '12-15',
          rest: '60s',
          description: 'The perfect starting point for building pushing strength. By using a wall, you reduce the load on your chest and arms while learning proper push-up mechanics.',
          steps: [
            'Stand facing a wall, about arm\'s length away',
            'Place your palms flat on the wall at shoulder height and shoulder-width apart',
            'Keep your body in a straight line from head to heels',
            'Bend your elbows and lean your chest toward the wall',
            'Push back to the starting position with control',
            'Maintain core engagement throughout the movement'
          ],
          tips: [
            'Keep your elbows at a 45-degree angle, not flared out',
            'Move closer to the wall to make it easier, farther to make it harder',
            'Focus on controlled movement rather than speed',
            'Breathe in as you lower, breathe out as you push'
          ],
          breathing: 'Inhale as you lower toward the wall, exhale as you push away'
        },
        {
          id: 'incline-pushup',
          name: 'Incline Push-Up',
          icon: '📐',
          targetMuscles: 'Lower Chest, Shoulders, Triceps',
          sets: '3',
          reps: '10-12',
          rest: '60s',
          description: 'A progression from wall push-ups using an elevated surface like a bench, chair, or stairs. This reduces body weight resistance while building strength for floor push-ups.',
          steps: [
            'Place your hands on an elevated surface shoulder-width apart',
            'Walk your feet back until your body forms a straight line',
            'Lower your chest toward the surface by bending your elbows',
            'Go down until your chest nearly touches the surface',
            'Push back up to full arm extension',
            'Keep your core tight and body aligned throughout'
          ],
          tips: [
            'The higher the surface, the easier the exercise',
            'Progress by using lower surfaces over time',
            'Keep your head neutral - don\'t look up or down',
            'Squeeze your glutes to maintain body alignment'
          ],
          breathing: 'Inhale on the way down, exhale on the way up'
        },
        {
          id: 'knee-pushup',
          name: 'Knee Push-Up',
          icon: '🦵',
          targetMuscles: 'Chest, Shoulders, Triceps',
          sets: '3',
          reps: '10-15',
          rest: '60s',
          description: 'An excellent stepping stone to full push-ups. By placing your knees on the ground, you reduce the load while maintaining proper upper body mechanics.',
          steps: [
            'Start on all fours with hands slightly wider than shoulder-width',
            'Walk your hands forward and lower your hips until body is straight from knees to head',
            'Cross your ankles and lift your feet off the ground',
            'Lower your chest toward the floor with control',
            'Push back up until arms are fully extended',
            'Maintain a straight line from your knees to your head'
          ],
          tips: [
            'Don\'t let your hips sag or pike up',
            'Keep elbows at 45 degrees from your body',
            'Go all the way down - chest should nearly touch the floor',
            'Place a mat under your knees for comfort'
          ],
          breathing: 'Inhale as you descend, exhale as you press up'
        }
      ],
      intermediate: [
        {
          id: 'standard-pushup',
          name: 'Standard Push-Up',
          icon: '💪',
          targetMuscles: 'Chest, Shoulders, Triceps, Core',
          sets: '4',
          reps: '12-20',
          rest: '60s',
          description: 'The fundamental bodyweight pushing exercise. Master this movement and you\'ll build a solid foundation for all pressing movements.',
          steps: [
            'Start in a high plank position with hands slightly wider than shoulders',
            'Your body should form a straight line from head to heels',
            'Engage your core and squeeze your glutes',
            'Lower your body by bending your elbows until chest nearly touches the ground',
            'Keep elbows at approximately 45 degrees from your body',
            'Push through your palms to return to the starting position'
          ],
          tips: [
            'Don\'t let your hips sag or pike up during the movement',
            'Keep your neck neutral - look at a spot on the floor ahead of you',
            'Spread your fingers for a stable base',
            'Quality over quantity - full range of motion is essential'
          ],
          breathing: 'Inhale on the descent, exhale forcefully on the way up'
        },
        {
          id: 'wide-pushup',
          name: 'Wide Push-Up',
          icon: '↔️',
          targetMuscles: 'Outer Chest, Shoulders',
          sets: '3',
          reps: '10-15',
          rest: '60s',
          description: 'By placing your hands wider than shoulder-width, you shift more emphasis to the chest muscles, particularly the outer chest fibers.',
          steps: [
            'Start in push-up position with hands placed 1.5x shoulder-width apart',
            'Point your fingers slightly outward for wrist comfort',
            'Keep your body in a straight line and core engaged',
            'Lower your chest toward the ground',
            'Go as low as comfortable while maintaining form',
            'Push back up to the starting position'
          ],
          tips: [
            'Don\'t go wider than you can control',
            'You may not go as deep as standard push-ups - that\'s normal',
            'Focus on squeezing your chest at the top',
            'Keep elbows tracking over wrists'
          ],
          breathing: 'Inhale going down, exhale pressing up'
        },
        {
          id: 'diamond-pushup',
          name: 'Diamond Push-Up',
          icon: '💎',
          targetMuscles: 'Inner Chest, Triceps',
          sets: '3',
          reps: '8-12',
          rest: '75s',
          description: 'A challenging variation that targets the inner chest and places significant emphasis on the triceps. Great for building arm definition.',
          steps: [
            'Start in push-up position with hands together under your chest',
            'Form a diamond shape with your thumbs and index fingers touching',
            'Keep your body straight and core engaged',
            'Lower your chest toward your hands',
            'Go down until your chest nearly touches your hands',
            'Push back up while keeping elbows close to your body'
          ],
          tips: [
            'Keep your elbows tucked close to your sides',
            'If wrists hurt, slightly separate your hands',
            'This is harder than standard push-ups - reduce reps if needed',
            'Focus on triceps squeeze at the top'
          ],
          breathing: 'Controlled breath - inhale down, exhale up'
        }
      ],
      advanced: [
        {
          id: 'decline-pushup',
          name: 'Decline Push-Up',
          icon: '⬇️',
          targetMuscles: 'Upper Chest, Shoulders, Triceps',
          sets: '4',
          reps: '10-15',
          rest: '75s',
          description: 'Elevating your feet increases the load on your upper chest and shoulders. A challenging variation that builds impressive upper body strength.',
          steps: [
            'Place your feet on an elevated surface (bench, chair, or stairs)',
            'Walk your hands out until you\'re in a push-up position',
            'Your body should form a straight line from ankles to head',
            'Lower your chest toward the ground',
            'Go down until your nose nearly touches the floor',
            'Push back up with power while maintaining alignment'
          ],
          tips: [
            'The higher your feet, the harder the exercise',
            'Keep your core extra tight to prevent lower back sag',
            'Start with a low elevation and progress gradually',
            'Don\'t let your head drop - keep neck neutral'
          ],
          breathing: 'Deep inhale on descent, powerful exhale on ascent'
        },
        {
          id: 'archer-pushup',
          name: 'Archer Push-Up',
          icon: '🏹',
          targetMuscles: 'Chest, Shoulders, Triceps (Unilateral)',
          sets: '3',
          reps: '6-8 each side',
          rest: '90s',
          description: 'A unilateral push-up variation that shifts most of the work to one arm while the other assists. An excellent progression toward one-arm push-ups.',
          steps: [
            'Start in a wide push-up position with arms extended',
            'Turn one hand so fingers point outward',
            'Lower your body toward the hand that\'s facing forward',
            'The other arm stays straight, sliding outward for support',
            'Push back up, focusing on the working arm',
            'Complete all reps on one side, then switch'
          ],
          tips: [
            'Start with partial range of motion and progress',
            'Keep the supporting arm as straight as possible',
            'Focus on the working side doing 80% of the work',
            'Go slow - control is more important than depth'
          ],
          breathing: 'Inhale as you lower, exhale as you push up'
        },
        {
          id: 'clap-pushup',
          name: 'Clap Push-Up',
          icon: '👏',
          targetMuscles: 'Chest, Shoulders, Triceps (Explosive)',
          sets: '3',
          reps: '5-10',
          rest: '90s',
          description: 'A plyometric push-up that develops explosive pushing power. Excellent for athletes and those seeking advanced chest development.',
          steps: [
            'Start in a standard push-up position',
            'Lower your chest toward the ground with control',
            'Explosively push up so your hands leave the ground',
            'Quickly clap your hands together at the peak',
            'Land with soft elbows to absorb impact',
            'Immediately descend into the next rep'
          ],
          tips: [
            'Master explosive push-ups without the clap first',
            'Land with slightly bent elbows to protect joints',
            'Keep your core extremely tight throughout',
            'Start with fewer reps - quality over quantity',
            'Ensure adequate warm-up before attempting'
          ],
          breathing: 'Quick inhale at bottom, sharp exhale on explosion'
        },
        {
          id: 'pseudo-planche-pushup',
          name: 'Pseudo Planche Push-Up',
          icon: '🤸',
          targetMuscles: 'Chest, Front Delts, Core',
          sets: '3',
          reps: '6-10',
          rest: '90s',
          description: 'A challenging variation with hands positioned toward the hips and fingers pointing backward or outward. Mimics the planche position and builds serious strength.',
          steps: [
            'Start in push-up position but place hands near your hips',
            'Turn fingers outward or backward for wrist comfort',
            'Lean your shoulders forward past your hands',
            'Lower your body while maintaining the forward lean',
            'Push back up, keeping shoulders ahead of hands',
            'Maintain hollow body position throughout'
          ],
          tips: [
            'Start with hands only slightly back from normal position',
            'Lean forward more as you get stronger',
            'Keep your core extremely tight - no sagging',
            'Wrist flexibility is important - warm up thoroughly'
          ],
          breathing: 'Controlled breathing throughout the movement'
        }
      ]
    },

    back: {
      name: 'Back',
      subtitle: 'Build a strong, wide back with these pulling exercises',
      beginner: [
        {
          id: 'prone-y-raise',
          name: 'Prone Y-Raise',
          icon: '🙆',
          targetMuscles: 'Upper Back, Rear Delts, Traps',
          sets: '3',
          reps: '12-15',
          rest: '45s',
          description: 'A floor exercise that strengthens the upper back and improves posture. Perfect for those new to back training or as a warm-up.',
          steps: [
            'Lie face down on the floor with arms extended overhead',
            'Position arms in a Y-shape, thumbs pointing up',
            'Squeeze your shoulder blades together',
            'Lift your arms off the ground as high as comfortable',
            'Hold briefly at the top',
            'Lower with control and repeat'
          ],
          tips: [
            'Keep your forehead on the ground or a towel',
            'Don\'t use momentum - lift with control',
            'Focus on squeezing your shoulder blades',
            'Keep arms straight throughout the movement'
          ],
          breathing: 'Exhale as you lift, inhale as you lower'
        },
        {
          id: 'superman',
          name: 'Superman Hold',
          icon: '🦸',
          targetMuscles: 'Lower Back, Glutes, Upper Back',
          sets: '3',
          reps: '10-12',
          rest: '45s',
          description: 'A fundamental back exercise that strengthens the entire posterior chain. Essential for back health and posture.',
          steps: [
            'Lie face down with arms extended overhead',
            'Keep legs straight and together',
            'Simultaneously lift arms, chest, and legs off the ground',
            'Squeeze your glutes and lower back',
            'Hold for 2-3 seconds at the top',
            'Lower everything back down with control'
          ],
          tips: [
            'Don\'t hyperextend your neck - keep it neutral',
            'Squeeze your glutes to protect your lower back',
            'Start with shorter holds and progress',
            'Keep arms and legs straight'
          ],
          breathing: 'Exhale as you lift, hold breath briefly, inhale as you lower'
        },
        {
          id: 'doorway-row',
          name: 'Doorway Row',
          icon: '🚪',
          targetMuscles: 'Lats, Rhomboids, Biceps',
          sets: '3',
          reps: '10-12 each side',
          rest: '60s',
          description: 'A beginner-friendly rowing movement using a doorframe. Teaches the pulling pattern while allowing you to adjust difficulty.',
          steps: [
            'Stand facing the edge of an open doorframe',
            'Grip the doorframe with one hand at chest height',
            'Walk your feet toward the door, leaning back',
            'Keep your body straight from head to heels',
            'Pull your chest toward the doorframe',
            'Lower yourself back with control'
          ],
          tips: [
            'The more you lean back, the harder it gets',
            'Keep your elbow close to your body as you pull',
            'Squeeze your shoulder blade at the top',
            'Make sure the door is secure before starting'
          ],
          breathing: 'Exhale as you pull, inhale as you lower'
        }
      ],
      intermediate: [
        {
          id: 'inverted-row',
          name: 'Inverted Row',
          icon: '🔄',
          targetMuscles: 'Lats, Rhomboids, Rear Delts, Biceps',
          sets: '4',
          reps: '8-12',
          rest: '75s',
          description: 'The bodyweight equivalent of a barbell row. Use a sturdy table, low bar, or gymnastics rings to perform this essential back builder.',
          steps: [
            'Lie under a sturdy table or low bar',
            'Grip the edge with hands shoulder-width apart',
            'Extend your legs and keep body in a straight line',
            'Pull your chest up toward the bar/table',
            'Squeeze your shoulder blades together at the top',
            'Lower yourself with control until arms are straight'
          ],
          tips: [
            'Keep your body rigid - don\'t let hips sag',
            'Bend knees to make it easier, elevate feet to make it harder',
            'Pull to your chest, not your neck',
            'Focus on driving elbows back, not just bending arms'
          ],
          breathing: 'Exhale on the pull, inhale on the descent'
        },
        {
          id: 'reverse-snow-angel',
          name: 'Reverse Snow Angel',
          icon: '👼',
          targetMuscles: 'Upper Back, Rear Delts, Rotator Cuff',
          sets: '3',
          reps: '10-12',
          rest: '60s',
          description: 'A dynamic floor exercise that works the upper back through a full range of motion. Excellent for posture and shoulder health.',
          steps: [
            'Lie face down with arms at your sides, palms down',
            'Lift your chest slightly off the ground',
            'Raise your arms and sweep them overhead in an arc',
            'Keep arms lifted throughout the entire movement',
            'Reverse the motion back to the starting position',
            'Maintain the chest lift throughout all reps'
          ],
          tips: [
            'Keep arms straight throughout the movement',
            'Move slowly and with control',
            'Don\'t let arms touch the ground during the sweep',
            'Squeeze shoulder blades together throughout'
          ],
          breathing: 'Breathe naturally, exhale on the hardest part'
        },
        {
          id: 'australian-pullup',
          name: 'Australian Pull-Up (Feet Elevated)',
          icon: '🇦🇺',
          targetMuscles: 'Lats, Rhomboids, Biceps, Core',
          sets: '3',
          reps: '8-10',
          rest: '75s',
          description: 'An advanced inverted row variation with elevated feet that increases difficulty. A great progression toward full pull-ups.',
          steps: [
            'Set up under a bar at about waist height',
            'Place your feet on an elevated surface',
            'Grip the bar with hands shoulder-width or wider',
            'Keep your body in a straight line',
            'Pull your chest to the bar',
            'Lower with control to full arm extension'
          ],
          tips: [
            'The higher your feet, the harder the exercise',
            'Keep your body rigid throughout',
            'Pull elbows back and down',
            'Try different grip widths to target different areas'
          ],
          breathing: 'Exhale as you pull up, inhale lowering down'
        }
      ],
      advanced: [
        {
          id: 'pullup',
          name: 'Pull-Up',
          icon: '⬆️',
          targetMuscles: 'Lats, Biceps, Rear Delts, Core',
          sets: '4',
          reps: '6-12',
          rest: '90s',
          description: 'The king of bodyweight back exercises. Master this movement for incredible lat development and upper body pulling strength.',
          steps: [
            'Hang from a bar with hands slightly wider than shoulders',
            'Use an overhand (pronated) grip',
            'Engage your core and depress your shoulders',
            'Pull yourself up by driving elbows down and back',
            'Continue until your chin clears the bar',
            'Lower with control to full arm extension'
          ],
          tips: [
            'Initiate the pull by engaging lats, not just arms',
            'Avoid swinging or kipping',
            'Full range of motion - dead hang to chin over bar',
            'Keep your core tight to prevent swinging'
          ],
          breathing: 'Exhale as you pull up, inhale as you lower'
        },
        {
          id: 'wide-grip-pullup',
          name: 'Wide-Grip Pull-Up',
          icon: '🦅',
          targetMuscles: 'Lats (Width), Teres Major',
          sets: '3',
          reps: '5-10',
          rest: '90s',
          description: 'A pull-up variation with wider hand placement that emphasizes lat width. Builds the V-taper physique.',
          steps: [
            'Grip the bar with hands 1.5x shoulder-width apart',
            'Hang with arms fully extended',
            'Pull yourself up, leading with your chest',
            'Try to touch your upper chest to the bar',
            'Lower with control to full extension',
            'Maintain shoulder engagement throughout'
          ],
          tips: [
            'Focus on pulling elbows down to your sides',
            'Don\'t go so wide that you lose range of motion',
            'Keep chest up and proud throughout',
            'Control the descent - don\'t drop'
          ],
          breathing: 'Exhale pulling up, inhale lowering down'
        },
        {
          id: 'archer-pullup',
          name: 'Archer Pull-Up',
          icon: '🏹',
          targetMuscles: 'Lats, Biceps (Unilateral)',
          sets: '3',
          reps: '4-6 each side',
          rest: '120s',
          description: 'A unilateral pull-up variation that shifts most of the load to one arm. An excellent progression toward the one-arm pull-up.',
          steps: [
            'Grip the bar extra wide with overhand grip',
            'Pull yourself up toward one hand',
            'The working arm does most of the work',
            'The other arm stays relatively straight for assistance',
            'Lower with control and repeat',
            'Complete all reps on one side, then switch'
          ],
          tips: [
            'Start with a wider grip than normal pull-ups',
            'The assisting arm provides minimal help',
            'Focus on the working lat doing the pulling',
            'Progress by using the assist arm less over time'
          ],
          breathing: 'Exhale on the pull, inhale on the descent'
        },
        {
          id: 'muscle-up',
          name: 'Muscle-Up',
          icon: '🔥',
          targetMuscles: 'Lats, Chest, Triceps, Core',
          sets: '3',
          reps: '3-5',
          rest: '120s',
          description: 'The ultimate upper body calisthenics movement combining a pull-up and dip. A true demonstration of strength and skill.',
          steps: [
            'Hang from a bar with a false grip (wrists over the bar)',
            'Initiate a powerful pull-up',
            'As you rise, lean forward over the bar',
            'Transition by rotating your wrists and pushing elbows back',
            'Press yourself up until arms are straight',
            'Lower back down with control'
          ],
          tips: [
            'Master high pull-ups and straight bar dips first',
            'The false grip is essential for beginners',
            'Generate power from the bottom of the pull',
            'Keep the bar close to your body throughout',
            'Practice the transition separately'
          ],
          breathing: 'Exhale on the explosive pull, breathe at the top, exhale on the dip'
        }
      ]
    },

    shoulders: {
      name: 'Shoulders',
      subtitle: 'Develop strong, stable shoulders with these exercises',
      beginner: [
        {
          id: 'wall-angels',
          name: 'Wall Angels',
          icon: '👼',
          targetMuscles: 'Shoulders, Upper Back, Rotator Cuff',
          sets: '3',
          reps: '10-12',
          rest: '45s',
          description: 'A mobility and activation exercise that improves shoulder health and posture while building foundational strength.',
          steps: [
            'Stand with your back flat against a wall',
            'Press your lower back, upper back, and head into the wall',
            'Raise arms to form a "W" position with elbows at 90 degrees',
            'Keep arms in contact with the wall',
            'Slide arms up overhead, keeping contact with the wall',
            'Return to the W position and repeat'
          ],
          tips: [
            'If you can\'t keep your back flat, step feet further from wall',
            'Go only as high as you can while maintaining wall contact',
            'Move slowly and with control',
            'This is harder than it looks - don\'t rush'
          ],
          breathing: 'Exhale as you slide arms up, inhale coming down'
        },
        {
          id: 'prone-its',
          name: 'Prone I-T-Y Raises',
          icon: '🔤',
          targetMuscles: 'Rear Delts, Rotator Cuff, Traps',
          sets: '2',
          reps: '8-10 each position',
          rest: '45s',
          description: 'A series of three movements that target different parts of the shoulders and upper back. Essential for shoulder health.',
          steps: [
            'Lie face down on the floor with forehead on a towel',
            'I-Raise: Extend arms overhead, thumbs up, lift arms',
            'T-Raise: Arms out to sides at shoulder level, thumbs up, lift',
            'Y-Raise: Arms at 45 degrees overhead, thumbs up, lift',
            'Hold each position for 2 seconds at the top',
            'Lower with control between each letter'
          ],
          tips: [
            'Keep your neck neutral throughout',
            'Thumbs pointing up protects the shoulders',
            'Squeeze shoulder blades on each lift',
            'Start with no weight until form is perfect'
          ],
          breathing: 'Exhale on each lift, inhale as you lower'
        },
        {
          id: 'pike-hold',
          name: 'Pike Hold',
          icon: '⛰️',
          targetMuscles: 'Shoulders, Triceps, Core',
          sets: '3',
          reps: '20-30 seconds',
          rest: '60s',
          description: 'A static hold that introduces the pike position. Builds shoulder stability and prepares you for pike push-ups.',
          steps: [
            'Start in a push-up position',
            'Walk your feet toward your hands',
            'Push your hips up toward the ceiling',
            'Keep your arms and legs as straight as possible',
            'Form an inverted V-shape with your body',
            'Hold the position while pressing through your shoulders'
          ],
          tips: [
            'Press firmly through your palms',
            'Try to get your ears between your arms',
            'Bend knees slightly if hamstrings are tight',
            'Keep your head neutral, looking at your toes'
          ],
          breathing: 'Breathe steadily throughout the hold'
        }
      ],
      intermediate: [
        {
          id: 'pike-pushup',
          name: 'Pike Push-Up',
          icon: '🔺',
          targetMuscles: 'Front Delts, Triceps, Upper Chest',
          sets: '4',
          reps: '8-12',
          rest: '75s',
          description: 'A pushing exercise that mimics overhead pressing using body weight. The foundation for handstand push-ups.',
          steps: [
            'Start in a downward dog position with hips high',
            'Hands should be slightly wider than shoulders',
            'Bend your elbows and lower your head toward the floor',
            'Keep your hips high throughout the movement',
            'Lower until your head nearly touches the ground',
            'Push back up to the starting position'
          ],
          tips: [
            'The closer your feet to your hands, the harder it is',
            'Keep your core tight throughout',
            'Elbows should go forward and out slightly',
            'Look at your toes, not behind you'
          ],
          breathing: 'Inhale going down, exhale pressing up'
        },
        {
          id: 'elevated-pike-pushup',
          name: 'Elevated Pike Push-Up',
          icon: '📈',
          targetMuscles: 'Shoulders, Triceps',
          sets: '3',
          reps: '6-10',
          rest: '90s',
          description: 'A pike push-up with feet elevated to increase difficulty and shift more weight onto your shoulders.',
          steps: [
            'Place your feet on an elevated surface (chair, bench)',
            'Walk your hands back until you\'re in a pike position',
            'Your body should form an inverted V with hips high',
            'Lower your head toward the ground between your hands',
            'Push back up to the starting position',
            'Maintain the pike angle throughout'
          ],
          tips: [
            'Start with a lower elevation and progress',
            'Keep your legs as straight as possible',
            'The higher the elevation, the more it mimics handstand push-ups',
            'Control the descent - don\'t dive bomb'
          ],
          breathing: 'Inhale on descent, exhale on ascent'
        },
        {
          id: 'hindu-pushup',
          name: 'Hindu Push-Up',
          icon: '🐍',
          targetMuscles: 'Shoulders, Chest, Triceps, Core',
          sets: '3',
          reps: '10-15',
          rest: '75s',
          description: 'A dynamic push-up variation that flows between pike and cobra positions. Builds shoulder strength and mobility.',
          steps: [
            'Start in a pike position with hips high',
            'Bend your elbows and swoop your chest forward',
            'Continue scooping through until your chest is up',
            'End in an upward dog position with hips low',
            'Reverse the motion by pushing hips back up',
            'Return to the starting pike position'
          ],
          tips: [
            'Move in a smooth, flowing motion',
            'Don\'t let your hips or thighs touch the ground',
            'Keep your arms straight in the up-dog position',
            'This is a challenging exercise - start slow'
          ],
          breathing: 'Inhale scooping through, exhale pushing back'
        }
      ],
      advanced: [
        {
          id: 'wall-handstand-pushup',
          name: 'Wall Handstand Push-Up',
          icon: '🤸',
          targetMuscles: 'Shoulders, Triceps, Upper Chest',
          sets: '4',
          reps: '5-10',
          rest: '120s',
          description: 'The ultimate bodyweight shoulder exercise. Builds incredible pressing strength and shoulder development.',
          steps: [
            'Kick up into a handstand against a wall (back facing wall)',
            'Hands should be shoulder-width apart, fingers spread',
            'Keep your body tight and straight',
            'Lower yourself by bending your elbows',
            'Go down until your head lightly touches the ground',
            'Press back up to full arm extension'
          ],
          tips: [
            'Master wall handstand holds before attempting push-ups',
            'Use a pillow under your head when learning',
            'Keep your core extremely tight',
            'Face the wall (stomach to wall) for stricter form'
          ],
          breathing: 'Inhale going down, exhale pressing up'
        },
        {
          id: 'pseudo-planche',
          name: 'Pseudo Planche Lean',
          icon: '➡️',
          targetMuscles: 'Front Delts, Chest, Core',
          sets: '3',
          reps: '15-30 seconds',
          rest: '90s',
          description: 'An intense shoulder exercise that mimics planche positioning. Develops incredible front delt strength.',
          steps: [
            'Start in a push-up position with hands by your waist',
            'Turn your fingers outward or backward',
            'Lean your shoulders forward past your hands',
            'Keep your arms straight and core tight',
            'Hold the forward lean position',
            'Your shoulders should be well ahead of your wrists'
          ],
          tips: [
            'Start with minimal forward lean and progress',
            'Keep your body in a straight line',
            'Protract your shoulders (push them forward)',
            'Warm up your wrists thoroughly first'
          ],
          breathing: 'Breathe steadily throughout the hold'
        },
        {
          id: 'tuck-planche',
          name: 'Tuck Planche',
          icon: '🔵',
          targetMuscles: 'Shoulders, Chest, Core',
          sets: '4',
          reps: '10-15 second holds',
          rest: '120s',
          description: 'A planche progression where you hold your body parallel to the ground with knees tucked. A serious strength skill.',
          steps: [
            'Place hands on the ground, arms straight',
            'Lean forward until shoulders are ahead of hands',
            'Lift your feet off the ground',
            'Tuck your knees tightly to your chest',
            'Hold your body parallel to the ground',
            'Keep arms locked and shoulders protracted'
          ],
          tips: [
            'Master the pseudo planche lean first',
            'Use parallettes for wrist comfort if needed',
            'Round your upper back slightly (protract)',
            'This takes months to years to achieve - be patient'
          ],
          breathing: 'Breathe shallowly while maintaining tension'
        }
      ]
    },

    arms: {
      name: 'Arms',
      subtitle: 'Build powerful arms with these bodyweight exercises',
      beginner: [
        {
          id: 'bench-dip',
          name: 'Bench Dip',
          icon: '🪑',
          targetMuscles: 'Triceps, Front Delts, Chest',
          sets: '3',
          reps: '10-15',
          rest: '60s',
          description: 'A beginner-friendly triceps exercise using a bench or chair. Great for building pushing strength and triceps size.',
          steps: [
            'Sit on a bench or sturdy chair with hands beside your hips',
            'Grip the edge of the bench with fingers facing forward',
            'Slide your butt off the bench with legs extended',
            'Lower your body by bending your elbows',
            'Go down until your upper arms are parallel to the floor',
            'Push back up to the starting position'
          ],
          tips: [
            'Keep your back close to the bench',
            'Don\'t go too deep - it can strain shoulders',
            'Bend knees to make it easier',
            'Keep elbows pointing straight back, not flared'
          ],
          breathing: 'Inhale going down, exhale pushing up'
        },
        {
          id: 'chin-up-negative',
          name: 'Chin-Up Negative',
          icon: '⬇️',
          targetMuscles: 'Biceps, Lats, Forearms',
          sets: '3',
          reps: '5-8',
          rest: '90s',
          description: 'Eccentric-only chin-ups that build biceps strength and help progress toward full chin-ups.',
          steps: [
            'Use a box or jump to get to the top chin-up position',
            'Hold the bar with an underhand (supinated) grip',
            'Start with chin over the bar',
            'Lower yourself as slowly as possible',
            'Take 5-10 seconds to reach full arm extension',
            'Step back up and repeat'
          ],
          tips: [
            'Focus on a slow, controlled descent',
            'Fight gravity the entire way down',
            'Grip the bar tightly throughout',
            'This builds the strength needed for full chin-ups'
          ],
          breathing: 'Breathe steadily throughout the descent'
        },
        {
          id: 'diamond-pushup-knees',
          name: 'Diamond Push-Up (Knees)',
          icon: '💎',
          targetMuscles: 'Triceps, Inner Chest',
          sets: '3',
          reps: '10-12',
          rest: '60s',
          description: 'A knee variation of the diamond push-up that focuses on triceps development while building toward the full version.',
          steps: [
            'Start on your knees in a push-up position',
            'Place hands together under your chest in a diamond shape',
            'Touch your thumbs and index fingers together',
            'Lower your chest toward your hands',
            'Keep your elbows close to your body',
            'Push back up to the starting position'
          ],
          tips: [
            'Keep your body straight from knees to head',
            'Don\'t let elbows flare out',
            'Go as low as comfortable',
            'Focus on squeezing triceps at the top'
          ],
          breathing: 'Inhale down, exhale up'
        }
      ],
      intermediate: [
        {
          id: 'chinup',
          name: 'Chin-Up',
          icon: '💪',
          targetMuscles: 'Biceps, Lats, Forearms',
          sets: '4',
          reps: '6-12',
          rest: '90s',
          description: 'The best bodyweight exercise for biceps development. Uses an underhand grip to maximize biceps involvement.',
          steps: [
            'Grip the bar with palms facing you (supinated), shoulder-width apart',
            'Hang with arms fully extended',
            'Pull yourself up by driving elbows down',
            'Continue until your chin clears the bar',
            'Squeeze your biceps at the top',
            'Lower with control to full extension'
          ],
          tips: [
            'Keep your body relatively straight - minimal swinging',
            'Focus on squeezing biceps at the top',
            'Full range of motion for best results',
            'Don\'t kip or use momentum'
          ],
          breathing: 'Exhale pulling up, inhale lowering down'
        },
        {
          id: 'parallel-bar-dip',
          name: 'Parallel Bar Dip',
          icon: '⏸️',
          targetMuscles: 'Triceps, Chest, Front Delts',
          sets: '4',
          reps: '8-12',
          rest: '90s',
          description: 'The king of triceps exercises. Dips build serious arm size and pressing strength.',
          steps: [
            'Grip parallel bars and lift yourself to the top position',
            'Arms should be straight, shoulders down and back',
            'Keep your body upright for more triceps focus',
            'Lower yourself by bending your elbows',
            'Go down until upper arms are parallel to the ground',
            'Push back up to full arm extension'
          ],
          tips: [
            'Stay upright to target triceps, lean forward for more chest',
            'Don\'t go too deep if you have shoulder issues',
            'Keep your elbows pointing backward, not flared',
            'Control the descent - don\'t drop'
          ],
          breathing: 'Inhale going down, exhale pushing up'
        },
        {
          id: 'close-grip-pushup',
          name: 'Close-Grip Push-Up',
          icon: '🤏',
          targetMuscles: 'Triceps, Inner Chest',
          sets: '3',
          reps: '12-15',
          rest: '60s',
          description: 'A push-up variation with hands close together that shifts emphasis to the triceps.',
          steps: [
            'Start in push-up position with hands directly under your chest',
            'Hands should be 6-12 inches apart',
            'Keep your elbows tucked close to your body',
            'Lower your chest toward your hands',
            'Go down until your chest touches your hands',
            'Push back up, focusing on triceps contraction'
          ],
          tips: [
            'Keep elbows pointing backward, not out',
            'If wrists hurt, make a fist or use push-up handles',
            'Don\'t let hips sag',
            'Focus on the triceps squeeze at the top'
          ],
          breathing: 'Inhale down, exhale up'
        }
      ],
      advanced: [
        {
          id: 'ring-dip',
          name: 'Ring Dip',
          icon: '⭕',
          targetMuscles: 'Triceps, Chest, Shoulders, Core',
          sets: '4',
          reps: '6-10',
          rest: '120s',
          description: 'An advanced dip variation using gymnastics rings. The instability makes this incredibly challenging and effective.',
          steps: [
            'Grip the rings and jump to support position',
            'Lock out your arms and stabilize',
            'Turn the rings out (external rotation) at the top',
            'Lower yourself with control',
            'Go down until upper arms are parallel to the ground',
            'Push back up to lockout, turning rings out again'
          ],
          tips: [
            'Master parallel bar dips first',
            'The rings will shake - that\'s normal',
            'Keep rings close to your body',
            'RTO (rings turned out) at top is crucial'
          ],
          breathing: 'Inhale down, exhale up'
        },
        {
          id: 'korean-dip',
          name: 'Korean Dip',
          icon: '🔙',
          targetMuscles: 'Triceps, Shoulders, Core',
          sets: '3',
          reps: '5-8',
          rest: '120s',
          description: 'A challenging dip variation performed behind the back. Requires and builds significant triceps and shoulder strength.',
          steps: [
            'Stand in front of a bar at hip height',
            'Grip the bar behind you with palms facing back',
            'Lift yourself up so your back is to the bar',
            'Lower your body by bending your elbows',
            'Keep your body close to the bar',
            'Push back up to full arm extension'
          ],
          tips: [
            'Start with a low bar and feet on the ground for assistance',
            'Keep your body close to the bar',
            'Don\'t go too deep initially',
            'This requires good shoulder flexibility'
          ],
          breathing: 'Inhale going down, exhale pressing up'
        },
        {
          id: 'one-arm-pushup',
          name: 'One-Arm Push-Up',
          icon: '☝️',
          targetMuscles: 'Chest, Triceps, Shoulders, Core',
          sets: '3',
          reps: '3-6 each side',
          rest: '120s',
          description: 'The ultimate pressing strength demonstration. Requires tremendous strength and stability.',
          steps: [
            'Start in a wide push-up stance for balance',
            'Shift your weight to one arm',
            'Place the other hand behind your back or on your thigh',
            'Lower your chest toward the ground',
            'Keep your body from rotating',
            'Push back up using one arm'
          ],
          tips: [
            'Wider stance provides more stability',
            'Spread your feet wider as needed',
            'Your body will rotate slightly - minimize it',
            'Progress from assisted versions first'
          ],
          breathing: 'Inhale down, exhale up'
        }
      ]
    },

    core: {
      name: 'Core',
      subtitle: 'Build a rock-solid core with these exercises',
      beginner: [
        {
          id: 'dead-bug',
          name: 'Dead Bug',
          icon: '🐛',
          targetMuscles: 'Deep Core, Hip Flexors',
          sets: '3',
          reps: '10-12 each side',
          rest: '45s',
          description: 'An excellent exercise for learning core bracing and building foundational stability. Safe for beginners and those with back issues.',
          steps: [
            'Lie on your back with arms extended toward ceiling',
            'Raise your legs with knees bent at 90 degrees',
            'Press your lower back firmly into the floor',
            'Slowly extend opposite arm and leg',
            'Return to starting position',
            'Alternate sides with each rep'
          ],
          tips: [
            'Your lower back should NEVER leave the floor',
            'Move slowly - don\'t rush',
            'Exhale as you extend arm and leg',
            'Only extend as far as you can maintain back position'
          ],
          breathing: 'Exhale extending, inhale returning'
        },
        {
          id: 'plank',
          name: 'Plank',
          icon: '📏',
          targetMuscles: 'Core, Shoulders, Glutes',
          sets: '3',
          reps: '20-60 seconds',
          rest: '45s',
          description: 'The fundamental core exercise that builds endurance and stability throughout your entire midsection.',
          steps: [
            'Start in a forearm position with elbows under shoulders',
            'Extend your legs with toes on the ground',
            'Keep your body in a straight line from head to heels',
            'Engage your core by pulling belly button to spine',
            'Squeeze your glutes',
            'Hold the position while breathing normally'
          ],
          tips: [
            'Don\'t let your hips sag or pike up',
            'Keep your neck neutral - look at the floor',
            'Squeeze everything - core, glutes, legs',
            'Quality time over maximum time'
          ],
          breathing: 'Breathe normally throughout the hold'
        },
        {
          id: 'glute-bridge',
          name: 'Glute Bridge',
          icon: '🌉',
          targetMuscles: 'Glutes, Lower Back, Core',
          sets: '3',
          reps: '12-15',
          rest: '45s',
          description: 'A foundational exercise that strengthens the posterior chain while teaching hip extension.',
          steps: [
            'Lie on your back with knees bent, feet flat on floor',
            'Place feet hip-width apart, close to your butt',
            'Push through your heels to lift your hips',
            'Squeeze your glutes at the top',
            'Form a straight line from knees to shoulders',
            'Lower with control and repeat'
          ],
          tips: [
            'Drive through your heels, not your toes',
            'Squeeze glutes hard at the top',
            'Don\'t hyperextend your lower back',
            'Keep core engaged throughout'
          ],
          breathing: 'Exhale lifting up, inhale lowering down'
        }
      ],
      intermediate: [
        {
          id: 'hollow-body-hold',
          name: 'Hollow Body Hold',
          icon: '🍌',
          targetMuscles: 'Core, Hip Flexors',
          sets: '3',
          reps: '20-45 seconds',
          rest: '60s',
          description: 'A gymnastics staple that builds incredible core strength and the foundation for advanced movements.',
          steps: [
            'Lie on your back with arms extended overhead',
            'Press your lower back into the floor',
            'Lift your legs, shoulders, and arms off the ground',
            'Create a "banana" shape with your body',
            'Keep your lower back pressed down',
            'Hold the position while maintaining tension'
          ],
          tips: [
            'If lower back lifts, raise legs higher',
            'Tuck chin slightly, look at toes',
            'Arms should be by your ears',
            'Keep breathing - don\'t hold your breath'
          ],
          breathing: 'Breathe shallowly while maintaining tension'
        },
        {
          id: 'hanging-knee-raise',
          name: 'Hanging Knee Raise',
          icon: '🦵',
          targetMuscles: 'Lower Abs, Hip Flexors',
          sets: '3',
          reps: '10-15',
          rest: '60s',
          description: 'A hanging core exercise that targets the lower abs and builds grip strength.',
          steps: [
            'Hang from a bar with arms fully extended',
            'Keep your body still - no swinging',
            'Raise your knees toward your chest',
            'Curl your pelvis up at the top',
            'Pause briefly at the top',
            'Lower with control to the starting position'
          ],
          tips: [
            'Initiate the movement by tilting pelvis',
            'Don\'t just swing your legs up',
            'Control the descent - don\'t drop',
            'No swinging - reset between reps if needed'
          ],
          breathing: 'Exhale raising knees, inhale lowering'
        },
        {
          id: 'l-sit-hold',
          name: 'L-Sit Hold',
          icon: '🔷',
          targetMuscles: 'Core, Hip Flexors, Triceps',
          sets: '4',
          reps: '10-30 seconds',
          rest: '90s',
          description: 'A challenging static hold that builds tremendous core strength and compression.',
          steps: [
            'Sit between parallel bars or on the floor with hands beside hips',
            'Press down and lift your body off the ground',
            'Keep your legs straight out in front of you',
            'Point your toes and hold legs parallel to the ground',
            'Keep arms locked and shoulders depressed',
            'Hold the position as long as possible'
          ],
          tips: [
            'Use parallettes or push-up handles if needed',
            'Start with tucked L-sit if full L is too hard',
            'Push shoulders down away from ears',
            'Keep legs actively straight'
          ],
          breathing: 'Breathe shallowly, maintaining tension'
        }
      ],
      advanced: [
        {
          id: 'hanging-leg-raise',
          name: 'Hanging Leg Raise',
          icon: '🦿',
          targetMuscles: 'Lower Abs, Hip Flexors, Grip',
          sets: '4',
          reps: '8-12',
          rest: '90s',
          description: 'An advanced hanging core exercise that requires significant strength and control.',
          steps: [
            'Hang from a bar with arms extended',
            'Keep your body still and core engaged',
            'Raise straight legs until parallel to the ground',
            'Curl your pelvis at the top for full contraction',
            'Lower with complete control',
            'Avoid swinging throughout'
          ],
          tips: [
            'Keep legs straight - don\'t bend knees',
            'Go slow - momentum is cheating',
            'Raise past parallel if possible',
            'Reset between reps if swinging starts'
          ],
          breathing: 'Exhale raising, inhale lowering'
        },
        {
          id: 'dragon-flag',
          name: 'Dragon Flag',
          icon: '🐉',
          targetMuscles: 'Entire Core, Lats',
          sets: '3',
          reps: '5-8',
          rest: '120s',
          description: 'Made famous by Bruce Lee, this is one of the most challenging core exercises. Builds incredible full-body strength.',
          steps: [
            'Lie on a bench and grip behind your head',
            'Lift your entire body until only shoulders touch the bench',
            'Keep your body in a straight line',
            'Lower your body slowly toward the bench',
            'Keep your body rigid - don\'t pike',
            'Stop before your lower back touches, then raise back up'
          ],
          tips: [
            'Start with tucked or straddle versions',
            'Your body should stay straight like a flag',
            'Control the descent - this is the hardest part',
            'Squeeze your entire body tight'
          ],
          breathing: 'Inhale at top, exhale during descent'
        },
        {
          id: 'front-lever-tuck',
          name: 'Front Lever (Tucked)',
          icon: '➖',
          targetMuscles: 'Core, Lats, Shoulders',
          sets: '4',
          reps: '10-20 second holds',
          rest: '120s',
          description: 'A gymnastics skill where you hold your body horizontal while hanging from a bar. The tucked version is a progression.',
          steps: [
            'Hang from a bar with overhand grip',
            'Pull your shoulders down and back',
            'Raise your body while tucking knees to chest',
            'Continue until your body is horizontal',
            'Keep your back parallel to the ground',
            'Hold the position with straight arms'
          ],
          tips: [
            'Depress your shoulders throughout',
            'Keep arms straight - don\'t bend elbows',
            'Engage your lats strongly',
            'Progress by slowly extending legs over time'
          ],
          breathing: 'Breathe shallowly while holding'
        }
      ]
    },

    legs: {
      name: 'Legs',
      subtitle: 'Develop powerful legs with these bodyweight movements',
      beginner: [
        {
          id: 'bodyweight-squat',
          name: 'Bodyweight Squat',
          icon: '🏋️',
          targetMuscles: 'Quads, Glutes, Hamstrings',
          sets: '3',
          reps: '15-20',
          rest: '60s',
          description: 'The foundation of lower body training. Master the squat pattern for athletic performance and daily function.',
          steps: [
            'Stand with feet shoulder-width apart or slightly wider',
            'Turn your toes out slightly (15-30 degrees)',
            'Keep your chest up and core engaged',
            'Bend your knees and push your hips back',
            'Lower until thighs are at least parallel to the floor',
            'Drive through your feet to stand back up'
          ],
          tips: [
            'Keep your weight in your heels and midfoot',
            'Knees should track over your toes',
            'Keep your chest up - don\'t lean forward too much',
            'Go as deep as your mobility allows with good form'
          ],
          breathing: 'Inhale going down, exhale standing up'
        },
        {
          id: 'glute-bridge-single',
          name: 'Single-Leg Glute Bridge',
          icon: '🦩',
          targetMuscles: 'Glutes, Hamstrings, Core',
          sets: '3',
          reps: '10-12 each leg',
          rest: '60s',
          description: 'A unilateral glute exercise that addresses imbalances and builds single-leg strength.',
          steps: [
            'Lie on your back with knees bent',
            'Extend one leg straight up toward the ceiling',
            'Push through the heel of your planted foot',
            'Lift your hips until your body forms a straight line',
            'Squeeze your glute at the top',
            'Lower with control and repeat'
          ],
          tips: [
            'Keep the raised leg straight',
            'Drive through your heel, not your toes',
            'Don\'t let your hips drop or rotate',
            'Complete all reps on one side before switching'
          ],
          breathing: 'Exhale lifting, inhale lowering'
        },
        {
          id: 'step-up',
          name: 'Step-Up',
          icon: '📦',
          targetMuscles: 'Quads, Glutes, Hamstrings',
          sets: '3',
          reps: '10-12 each leg',
          rest: '60s',
          description: 'A functional single-leg exercise using a step or bench. Great for building leg strength and balance.',
          steps: [
            'Stand facing a box, bench, or sturdy step',
            'Place one foot fully on top of the box',
            'Press through that foot to lift your body up',
            'Stand fully on the box, bringing the other foot up',
            'Lower yourself back down with control',
            'Complete all reps on one leg before switching'
          ],
          tips: [
            'Don\'t push off with your back leg',
            'Keep your chest up throughout',
            'Start with a lower box and progress',
            'Ensure the full foot is on the box'
          ],
          breathing: 'Exhale stepping up, inhale stepping down'
        }
      ],
      intermediate: [
        {
          id: 'split-squat',
          name: 'Bulgarian Split Squat',
          icon: '🇧🇬',
          targetMuscles: 'Quads, Glutes, Hamstrings',
          sets: '3',
          reps: '8-12 each leg',
          rest: '90s',
          description: 'A challenging single-leg exercise with the rear foot elevated. Builds serious leg strength and balance.',
          steps: [
            'Stand 2-3 feet in front of a bench or chair',
            'Place the top of one foot on the bench behind you',
            'Keep your front foot firmly planted',
            'Lower your body until your front thigh is parallel to the ground',
            'Drive through your front foot to stand back up',
            'Complete all reps on one leg before switching'
          ],
          tips: [
            'Keep your torso upright',
            'Front knee should track over your toes',
            'Find the right distance - not too close or far from the bench',
            'Control the descent - don\'t drop'
          ],
          breathing: 'Inhale going down, exhale standing up'
        },
        {
          id: 'jump-squat',
          name: 'Jump Squat',
          icon: '🚀',
          targetMuscles: 'Quads, Glutes, Calves (Explosive)',
          sets: '3',
          reps: '10-15',
          rest: '90s',
          description: 'A plyometric squat variation that builds explosive power and athleticism.',
          steps: [
            'Start in a squat stance',
            'Lower into a squat position',
            'Explosively jump as high as possible',
            'Extend your body fully in the air',
            'Land softly with bent knees',
            'Immediately lower into the next rep'
          ],
          tips: [
            'Land quietly - absorb impact with your legs',
            'Keep your chest up throughout',
            'Jump straight up, not forward',
            'Start with lower jumps if needed'
          ],
          breathing: 'Exhale explosively during the jump'
        },
        {
          id: 'nordic-curl',
          name: 'Nordic Hamstring Curl',
          icon: '🦵',
          targetMuscles: 'Hamstrings',
          sets: '3',
          reps: '4-8',
          rest: '120s',
          description: 'One of the best hamstring exercises. Uses eccentric loading to build incredible hamstring strength.',
          steps: [
            'Kneel on a pad with ankles secured under something sturdy',
            'Keep your body straight from knees to head',
            'Slowly lower your body toward the ground',
            'Control the descent using your hamstrings',
            'Go as low as you can with control',
            'Use your hands to push back up if needed'
          ],
          tips: [
            'The eccentric (lowering) is the main benefit',
            'It\'s okay to use hands to push back up',
            'Keep hips extended - don\'t bend at the waist',
            'Progress by going lower over time'
          ],
          breathing: 'Inhale lowering, exhale returning'
        }
      ],
      advanced: [
        {
          id: 'pistol-squat',
          name: 'Pistol Squat',
          icon: '🔫',
          targetMuscles: 'Quads, Glutes, Core, Balance',
          sets: '4',
          reps: '4-8 each leg',
          rest: '120s',
          description: 'The ultimate single-leg strength exercise. Requires strength, balance, and mobility.',
          steps: [
            'Stand on one leg with the other extended forward',
            'Extend your arms forward for balance',
            'Lower yourself on one leg while keeping the other straight',
            'Go all the way down until your glute touches your calf',
            'Drive through your foot to stand back up',
            'Keep the extended leg off the ground throughout'
          ],
          tips: [
            'Start by holding onto something for balance',
            'Work on ankle and hip mobility',
            'Keep your heel on the ground',
            'It\'s okay to lean forward slightly'
          ],
          breathing: 'Inhale going down, exhale standing up'
        },
        {
          id: 'shrimp-squat',
          name: 'Shrimp Squat',
          icon: '🦐',
          targetMuscles: 'Quads, Glutes, Hip Flexors',
          sets: '3',
          reps: '4-6 each leg',
          rest: '120s',
          description: 'An advanced single-leg squat where the back leg is held behind you. Tests balance and leg strength.',
          steps: [
            'Stand on one leg',
            'Reach back and grab your other foot behind you',
            'Lower yourself by bending your standing leg',
            'Keep your back knee traveling behind you',
            'Touch your back knee to the ground if possible',
            'Stand back up while still holding your foot'
          ],
          tips: [
            'Start with partial range of motion',
            'Place a cushion where your knee will touch',
            'Keep your torso upright',
            'Use a wall for balance when learning'
          ],
          breathing: 'Inhale lowering, exhale rising'
        },
        {
          id: 'explosive-lunge',
          name: 'Jumping Lunge',
          icon: '⚡',
          targetMuscles: 'Quads, Glutes, Hamstrings (Explosive)',
          sets: '3',
          reps: '8-12 each leg',
          rest: '90s',
          description: 'A plyometric lunge variation that builds explosive single-leg power.',
          steps: [
            'Start in a lunge position',
            'Explosively jump up, switching legs in the air',
            'Land softly in a lunge with the opposite leg forward',
            'Immediately jump and switch again',
            'Keep your torso upright throughout',
            'Maintain a steady rhythm'
          ],
          tips: [
            'Land softly to protect your knees',
            'Use your arms for momentum',
            'Keep your core tight',
            'Start with regular lunges until confident'
          ],
          breathing: 'Exhale during each jump'
        }
      ]
    },

    fullbody: {
      name: 'Full Body',
      subtitle: 'Complete movements that work your entire body',
      beginner: [
        {
          id: 'bear-crawl',
          name: 'Bear Crawl',
          icon: '🐻',
          targetMuscles: 'Shoulders, Core, Quads, Coordination',
          sets: '3',
          reps: '20-30 seconds',
          rest: '60s',
          description: 'A primal movement pattern that builds coordination, core strength, and overall conditioning.',
          steps: [
            'Start on all fours with knees hovering just off the ground',
            'Keep your back flat and hips down',
            'Move forward by stepping opposite hand and foot together',
            'Keep your knees close to the ground throughout',
            'Move slowly and with control',
            'You can also move backward or laterally'
          ],
          tips: [
            'Keep your hips level - don\'t let them sway',
            'Move opposite limbs together (right hand, left foot)',
            'Keep your core tight throughout',
            'Go slow - speed will come with practice'
          ],
          breathing: 'Breathe rhythmically with your movement'
        },
        {
          id: 'inchworm',
          name: 'Inchworm',
          icon: '🐛',
          targetMuscles: 'Core, Shoulders, Hamstrings',
          sets: '3',
          reps: '6-10',
          rest: '60s',
          description: 'A dynamic warm-up and strength exercise that stretches the hamstrings and works the core and shoulders.',
          steps: [
            'Stand with feet hip-width apart',
            'Hinge at hips and place hands on the floor',
            'Walk your hands forward into a plank position',
            'Hold the plank briefly',
            'Walk your hands back toward your feet',
            'Stand up and repeat'
          ],
          tips: [
            'Keep legs as straight as possible when hinging',
            'Don\'t let hips sag in the plank',
            'Move your hands in small steps',
            'Great for warm-ups or as a finisher'
          ],
          breathing: 'Exhale walking out, inhale walking back'
        },
        {
          id: 'squat-hold',
          name: 'Squat Hold',
          icon: '🧘',
          targetMuscles: 'Quads, Glutes, Core, Mobility',
          sets: '3',
          reps: '30-60 seconds',
          rest: '45s',
          description: 'An isometric squat hold that builds leg endurance and improves squat mobility.',
          steps: [
            'Lower into a deep squat position',
            'Keep your feet flat on the ground',
            'Hold your arms out in front for balance',
            'Keep your chest up and back straight',
            'Hold the position',
            'Try to relax into the stretch'
          ],
          tips: [
            'It\'s okay if heels lift initially - work on mobility',
            'Use a doorframe or pole for balance if needed',
            'Try to make this a daily practice',
            'Breathe deeply and relax'
          ],
          breathing: 'Deep, relaxed breathing throughout'
        }
      ],
      intermediate: [
        {
          id: 'burpee',
          name: 'Burpee',
          icon: '🔥',
          targetMuscles: 'Full Body, Cardio',
          sets: '3',
          reps: '10-15',
          rest: '90s',
          description: 'The king of bodyweight conditioning exercises. Works every muscle and elevates heart rate dramatically.',
          steps: [
            'Start standing with feet shoulder-width apart',
            'Squat down and place hands on the floor',
            'Jump or step your feet back into a plank',
            'Perform a push-up (optional but recommended)',
            'Jump or step your feet back toward your hands',
            'Explosively jump up with hands overhead'
          ],
          tips: [
            'Maintain good push-up form - don\'t sag',
            'Land softly from the jump',
            'Scale by removing the push-up or jump',
            'Keep a steady pace - don\'t burn out too fast'
          ],
          breathing: 'Exhale on the jump, breathe during the push-up'
        },
        {
          id: 'mountain-climber',
          name: 'Mountain Climber',
          icon: '⛰️',
          targetMuscles: 'Core, Shoulders, Hip Flexors, Cardio',
          sets: '3',
          reps: '30-45 seconds',
          rest: '60s',
          description: 'A dynamic plank variation that builds core strength and elevates heart rate.',
          steps: [
            'Start in a high plank position',
            'Drive one knee toward your chest',
            'Quickly switch legs, extending the first leg back',
            'Continue alternating at a rapid pace',
            'Keep your hips level throughout',
            'Maintain a strong plank position'
          ],
          tips: [
            'Don\'t let hips pike up or sag',
            'Keep your shoulders over your hands',
            'Go at a pace you can maintain',
            'Land on the balls of your feet'
          ],
          breathing: 'Breathe rhythmically, don\'t hold your breath'
        },
        {
          id: 'turkish-getup',
          name: 'Turkish Get-Up (Bodyweight)',
          icon: '🇹🇷',
          targetMuscles: 'Full Body, Core, Shoulders',
          sets: '3',
          reps: '3-5 each side',
          rest: '90s',
          description: 'A complex movement that takes you from lying to standing. Builds total body strength and coordination.',
          steps: [
            'Lie on your back with right arm extended toward ceiling',
            'Bend your right knee with foot flat on floor',
            'Roll onto your left elbow, then left hand',
            'Lift your hips off the ground',
            'Sweep your left leg under you to a kneeling position',
            'Stand up while keeping your arm overhead'
          ],
          tips: [
            'Keep your eyes on your raised hand',
            'Move slowly and deliberately',
            'Each step should be distinct',
            'Reverse the movement to return to start'
          ],
          breathing: 'Exhale during the difficult transitions'
        }
      ],
      advanced: [
        {
          id: 'burpee-pullup',
          name: 'Burpee Pull-Up',
          icon: '🔥',
          targetMuscles: 'Full Body, Lats, Conditioning',
          sets: '3',
          reps: '6-10',
          rest: '120s',
          description: 'A brutal combination that adds a pull-up to the standard burpee. Ultimate full-body conditioning.',
          steps: [
            'Stand under a pull-up bar',
            'Perform a burpee with a push-up',
            'As you jump up, grab the bar',
            'Immediately perform a pull-up',
            'Lower yourself and drop from the bar',
            'Go immediately into the next burpee'
          ],
          tips: [
            'Make sure you can do both movements separately first',
            'Jump high enough to easily grip the bar',
            'Maintain form even when fatigued',
            'Start with fewer reps and build up'
          ],
          breathing: 'Exhale on the pull-up, breathe during burpee'
        },
        {
          id: 'muscle-up-progression',
          name: 'Muscle-Up',
          icon: '💥',
          targetMuscles: 'Lats, Chest, Triceps, Core',
          sets: '3',
          reps: '3-5',
          rest: '120s',
          description: 'The ultimate bar exercise combining a pull-up with a dip in one fluid motion.',
          steps: [
            'Grip the bar slightly wider than shoulder width',
            'Start with a powerful pull-up',
            'Pull the bar toward your hips, not your chin',
            'Lean forward as you rise',
            'Transition your wrists over the bar',
            'Push yourself up to a straight-arm support'
          ],
          tips: [
            'Master explosive pull-ups first',
            'The transition is the key - practice it separately',
            'Keep the bar close to your body',
            'Use a false grip when learning'
          ],
          breathing: 'Exhale explosively during the pull'
        },
        {
          id: 'handstand-walk',
          name: 'Handstand Walk',
          icon: '🚶',
          targetMuscles: 'Shoulders, Core, Balance',
          sets: '3',
          reps: '10-20 feet',
          rest: '120s',
          description: 'Walking on your hands requires and builds incredible shoulder strength, balance, and body control.',
          steps: [
            'Kick up into a freestanding handstand',
            'Find your balance point',
            'Shift your weight to one hand',
            'Take a small step with the other hand',
            'Shift weight and continue walking',
            'Keep core tight and legs together'
          ],
          tips: [
            'Master wall handstands and freestanding holds first',
            'Take small, controlled steps',
            'Look at the ground between your hands',
            'Practice falling safely (cartwheel out)'
          ],
          breathing: 'Shallow, controlled breathing'
        }
      ]
    }
  };

  // ==========================================
  // THREE.JS 3D BODY MODEL
  // ==========================================
  let scene, camera, renderer, bodyGroup;
  let autoRotate = true;
  let targetRotationY = 0;
  let currentRotationY = 0;

  // Muscle highlight colors
  const muscleColors = {
    default: 0x4a4a5a,
    chest: 0xef4444,
    back: 0x3b82f6,
    shoulders: 0x8b5cf6,
    arms: 0xf59e0b,
    core: 0x10b981,
    legs: 0x6366f1,
    fullbody: 0xa855f7
  };

  let currentHighlight = 'chest';

  function init3D() {
    const container = document.getElementById('canvas-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    // Camera
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0.5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404050, 0.5);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontLight.position.set(0, 2, 5);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0x6366f1, 0.4);
    backLight.position.set(0, 2, -5);
    scene.add(backLight);

    const topLight = new THREE.DirectionalLight(0x8b5cf6, 0.3);
    topLight.position.set(0, 5, 0);
    scene.add(topLight);

    // Create body
    bodyGroup = new THREE.Group();
    createStylizedBody();
    scene.add(bodyGroup);

    // Start animation
    animate();

    // Handle resize
    window.addEventListener('resize', onWindowResize);
  }

  function createStylizedBody() {
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: muscleColors.default,
      roughness: 0.7,
      metalness: 0.1
    });

    // Torso
    const torsoGeometry = new THREE.CylinderGeometry(0.5, 0.4, 1.2, 16);
    const torso = new THREE.Mesh(torsoGeometry, bodyMaterial.clone());
    torso.position.y = 0.3;
    torso.name = 'core';
    bodyGroup.add(torso);

    // Chest
    const chestGeometry = new THREE.SphereGeometry(0.55, 16, 16);
    const chest = new THREE.Mesh(chestGeometry, bodyMaterial.clone());
    chest.position.y = 0.7;
    chest.position.z = 0.1;
    chest.scale.set(1, 0.7, 0.6);
    chest.name = 'chest';
    bodyGroup.add(chest);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const head = new THREE.Mesh(headGeometry, bodyMaterial.clone());
    head.position.y = 1.3;
    head.name = 'head';
    bodyGroup.add(head);

    // Neck
    const neckGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.15, 12);
    const neck = new THREE.Mesh(neckGeometry, bodyMaterial.clone());
    neck.position.y = 1.0;
    bodyGroup.add(neck);

    // Shoulders (spheres)
    const shoulderGeometry = new THREE.SphereGeometry(0.15, 12, 12);

    const leftShoulder = new THREE.Mesh(shoulderGeometry, bodyMaterial.clone());
    leftShoulder.position.set(-0.55, 0.8, 0);
    leftShoulder.name = 'shoulders';
    bodyGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeometry, bodyMaterial.clone());
    rightShoulder.position.set(0.55, 0.8, 0);
    rightShoulder.name = 'shoulders';
    bodyGroup.add(rightShoulder);

    // Upper Arms
    const upperArmGeometry = new THREE.CapsuleGeometry(0.1, 0.4, 8, 8);

    const leftUpperArm = new THREE.Mesh(upperArmGeometry, bodyMaterial.clone());
    leftUpperArm.position.set(-0.65, 0.5, 0);
    leftUpperArm.rotation.z = 0.15;
    leftUpperArm.name = 'arms';
    bodyGroup.add(leftUpperArm);

    const rightUpperArm = new THREE.Mesh(upperArmGeometry, bodyMaterial.clone());
    rightUpperArm.position.set(0.65, 0.5, 0);
    rightUpperArm.rotation.z = -0.15;
    rightUpperArm.name = 'arms';
    bodyGroup.add(rightUpperArm);

    // Lower Arms
    const lowerArmGeometry = new THREE.CapsuleGeometry(0.08, 0.35, 8, 8);

    const leftLowerArm = new THREE.Mesh(lowerArmGeometry, bodyMaterial.clone());
    leftLowerArm.position.set(-0.72, 0.05, 0);
    leftLowerArm.rotation.z = 0.1;
    leftLowerArm.name = 'arms';
    bodyGroup.add(leftLowerArm);

    const rightLowerArm = new THREE.Mesh(lowerArmGeometry, bodyMaterial.clone());
    rightLowerArm.position.set(0.72, 0.05, 0);
    rightLowerArm.rotation.z = -0.1;
    rightLowerArm.name = 'arms';
    bodyGroup.add(rightLowerArm);

    // Hips
    const hipGeometry = new THREE.CylinderGeometry(0.45, 0.35, 0.3, 16);
    const hips = new THREE.Mesh(hipGeometry, bodyMaterial.clone());
    hips.position.y = -0.35;
    hips.name = 'legs';
    bodyGroup.add(hips);

    // Upper Legs
    const upperLegGeometry = new THREE.CapsuleGeometry(0.15, 0.5, 8, 8);

    const leftUpperLeg = new THREE.Mesh(upperLegGeometry, bodyMaterial.clone());
    leftUpperLeg.position.set(-0.2, -0.8, 0);
    leftUpperLeg.name = 'legs';
    bodyGroup.add(leftUpperLeg);

    const rightUpperLeg = new THREE.Mesh(upperLegGeometry, bodyMaterial.clone());
    rightUpperLeg.position.set(0.2, -0.8, 0);
    rightUpperLeg.name = 'legs';
    bodyGroup.add(rightUpperLeg);

    // Lower Legs
    const lowerLegGeometry = new THREE.CapsuleGeometry(0.1, 0.5, 8, 8);

    const leftLowerLeg = new THREE.Mesh(lowerLegGeometry, bodyMaterial.clone());
    leftLowerLeg.position.set(-0.2, -1.45, 0);
    leftLowerLeg.name = 'legs';
    bodyGroup.add(leftLowerLeg);

    const rightLowerLeg = new THREE.Mesh(lowerLegGeometry, bodyMaterial.clone());
    rightLowerLeg.position.set(0.2, -1.45, 0);
    rightLowerLeg.name = 'legs';
    bodyGroup.add(rightLowerLeg);

    // Back (visible from behind)
    const backGeometry = new THREE.BoxGeometry(0.8, 0.9, 0.2);
    const back = new THREE.Mesh(backGeometry, bodyMaterial.clone());
    back.position.set(0, 0.5, -0.25);
    back.name = 'back';
    bodyGroup.add(back);

    // Apply initial highlight
    highlightMuscle('chest');
  }

  function highlightMuscle(muscleName) {
    currentHighlight = muscleName;

    bodyGroup.children.forEach(child => {
      if (child.material) {
        if (muscleName === 'fullbody') {
          // Highlight everything
          child.material.color.setHex(muscleColors.fullbody);
          child.material.emissive = new THREE.Color(muscleColors.fullbody);
          child.material.emissiveIntensity = 0.2;
        } else if (child.name === muscleName) {
          child.material.color.setHex(muscleColors[muscleName]);
          child.material.emissive = new THREE.Color(muscleColors[muscleName]);
          child.material.emissiveIntensity = 0.3;
        } else {
          child.material.color.setHex(muscleColors.default);
          child.material.emissive = new THREE.Color(0x000000);
          child.material.emissiveIntensity = 0;
        }
      }
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    if (autoRotate) {
      targetRotationY += 0.003;
    }

    // Smooth rotation
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    bodyGroup.rotation.y = currentRotationY;

    // Subtle floating animation
    bodyGroup.position.y = Math.sin(Date.now() * 0.001) * 0.05;

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    const container = document.getElementById('canvas-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // ==========================================
  // UI FUNCTIONS
  // ==========================================
  let currentPart = 'chest';
  let currentLevel = 'beginner';

  function renderExerciseList() {
    const exerciseList = document.getElementById('exerciseList');
    const exercises = exerciseData[currentPart][currentLevel];

    if (!exercises) {
      exerciseList.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No exercises found for this combination.</p>';
      return;
    }

    exerciseList.innerHTML = exercises.map(ex => `
      <div class="exercise-card" data-exercise-id="${ex.id}">
        <div class="exercise-card-header">
          <div class="exercise-icon">${ex.icon}</div>
          <div class="exercise-title">
            <h4>${ex.name}</h4>
            <span>${ex.targetMuscles}</span>
          </div>
        </div>
        <div class="exercise-stats">
          <div class="stat-item">
            <div class="stat-value">${ex.sets}</div>
            <div class="stat-label">Sets</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${ex.reps}</div>
            <div class="stat-label">Reps</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${ex.rest}</div>
            <div class="stat-label">Rest</div>
          </div>
        </div>
      </div>
    `).join('');

    // Add click handlers
    exerciseList.querySelectorAll('.exercise-card').forEach(card => {
      card.addEventListener('click', () => {
        const exId = card.dataset.exerciseId;
        const exercise = exercises.find(e => e.id === exId);
        if (exercise) openExerciseModal(exercise);
      });
    });
  }

  function openExerciseModal(exercise) {
    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = exercise.name;
    modalSubtitle.textContent = exercise.targetMuscles;

    modalBody.innerHTML = `
      <span class="level-badge ${currentLevel}">${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}</span>

      <div class="exercise-section">
        <h3>Programming</h3>
        <div class="programming-grid">
          <div class="programming-item">
            <div class="value">${exercise.sets}</div>
            <div class="label">Sets</div>
          </div>
          <div class="programming-item">
            <div class="value">${exercise.reps}</div>
            <div class="label">Reps</div>
          </div>
          <div class="programming-item">
            <div class="value">${exercise.rest}</div>
            <div class="label">Rest</div>
          </div>
          <div class="programming-item">
            <div class="value">${currentLevel === 'beginner' ? '2-3x' : currentLevel === 'intermediate' ? '3-4x' : '4-5x'}</div>
            <div class="label">Per Week</div>
          </div>
        </div>
      </div>

      <div class="exercise-section">
        <h3>Description</h3>
        <p style="color: var(--text-secondary); line-height: 1.7;">${exercise.description}</p>
      </div>

      <div class="exercise-section">
        <h3>How to Perform</h3>
        <div class="steps-list">
          ${exercise.steps.map((step, i) => `
            <div class="step-item">
              <div class="step-number">${i + 1}</div>
              <div class="step-text">${step}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="exercise-section">
        <h3>Breathing</h3>
        <p style="color: var(--text-secondary); line-height: 1.7;">${exercise.breathing}</p>
      </div>

      <div class="exercise-section">
        <h3>Tips & Common Mistakes</h3>
        <div class="tips-list">
          ${exercise.tips.map(tip => `
            <div class="tip-item">
              <span class="icon">💡</span>
              <span>${tip}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  function closeModal() {
    document.getElementById('exerciseModal').classList.remove('active');
  }

  function updatePanelInfo() {
    const data = exerciseData[currentPart];
    document.getElementById('panelTitle').textContent = `${data.name} Exercises`;
    document.getElementById('panelSubtitle').textContent = data.subtitle;
  }

  // ==========================================
  // EVENT LISTENERS
  // ==========================================
  function setupEventListeners() {
    // Body part buttons
    document.querySelectorAll('.body-part-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.body-part-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentPart = btn.dataset.part;
        highlightMuscle(currentPart);
        updatePanelInfo();
        renderExerciseList();

        // Show muscle indicator
        const indicator = document.getElementById('muscleIndicator');
        document.getElementById('muscleName').textContent = exerciseData[currentPart].name;
        document.getElementById('muscleDesc').textContent = 'View exercises below';
        indicator.classList.add('visible');
        setTimeout(() => indicator.classList.remove('visible'), 2000);
      });
    });

    // Level tabs
    document.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        currentLevel = tab.dataset.level;
        renderExerciseList();
      });
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('exerciseModal').addEventListener('click', (e) => {
      if (e.target.id === 'exerciseModal') closeModal();
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Rotation controls
    document.getElementById('rotateLeftBtn').addEventListener('click', () => {
      autoRotate = false;
      document.getElementById('toggleAutoRotate').classList.remove('active');
      targetRotationY -= Math.PI / 4;
    });

    document.getElementById('rotateRightBtn').addEventListener('click', () => {
      autoRotate = false;
      document.getElementById('toggleAutoRotate').classList.remove('active');
      targetRotationY += Math.PI / 4;
    });

    document.getElementById('resetViewBtn').addEventListener('click', () => {
      targetRotationY = 0;
    });

    document.getElementById('toggleAutoRotate').addEventListener('click', (e) => {
      autoRotate = !autoRotate;
      e.currentTarget.classList.toggle('active', autoRotate);
    });
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    init3D();
    setupEventListeners();
    updatePanelInfo();
    renderExerciseList();

    // Hide loading screen
    setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);

    // Set initial auto-rotate button state
    document.getElementById('toggleAutoRotate').classList.add('active');
  }

  // Wait for DOM and Three.js
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
