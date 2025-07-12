let scene, camera, renderer, controls;
let isAnimating = true;
const planets = [];
const orbits = [];

// not done by me purely done for testing purposes
const planetData = [
    { name: 'Mercury', radius: 25, size: 2.0, speed: 0.005 },
    { name: 'Venus', radius: 30, size: 2.5, speed: 0.0045 },
    { name: 'Earth', radius: 35, size: 2.7, speed: 0.0040 },
    { name: 'Mars', radius: 40, size: 2.0, speed: 0.0035 },
    { name: 'Jupiter', radius: 50, size: 5.0, speed: 0.0030 },
    { name: 'Saturn', radius: 60, size: 4.5, speed: 0.0025 },
    { name: 'Uranus', radius: 70, size: 3.5, speed: 0.0020 },
    { name: 'Neptune', radius: 80, size: 3.5, speed: 0.0015 },
    { name: 'Pluto', radius: 85, size: 1.5, speed: 0.0010 },
    { name: 'Ceres', radius: 90, size: 1.0, speed: 0.0005 }
];

function init() {
    // Debugging: Log initialization
    console.log('Initializing scene...');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    camera.position.set(0, 30, 100);
    console.log('Camera set up:', camera.position);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    if (!renderer) {
        console.error('WebGLRenderer initialization failed!');
        return;
    }
    renderer.setSize(innerWidth, innerHeight);
    const container = document.getElementById('container');
    if (!container) {
        console.error('Container element not found!');
        return;
    }
    container.appendChild(renderer.domElement);
    console.log('Renderer attached to container');

    // Enhanced lighting
    const light = new THREE.PointLight(0xffffff, 3, 1000);
    light.position.set(0, 0, 0);
    scene.add(light);
    console.log('Light added');

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.4);
    scene.add(hemiLight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    if (!controls) {
        console.error('OrbitControls initialization failed!');
        return;
    }
    controls.target.set(0, 0, 0);
    controls.update();
    console.log('Controls set up');

    const loader = new THREE.TextureLoader();

    // Sun with texture
    const sunTexture = loader.load('textures/sun.jpg', 
        () => console.log('Sun texture loaded'), 
        undefined, 
        (err) => console.error('Sun texture failed:', err)
    );
    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(15, 32, 32),
        new THREE.MeshBasicMaterial({ map: sunTexture })
    );
    scene.add(sun);
    console.log('Sun added to scene');

    // Orbital paths for planets
    const orbitMaterial = new THREE.LineDashedMaterial({ color: 0xd3d3d3, dashSize: 1, gapSize: 0.5 });

    planetData.forEach((p, i) => {
        const points = [];
        const segments = 64;
        for (let j = 0; j <= segments; j++) {
            const angle = (j / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(p.radius * Math.cos(angle), 0, p.radius * Math.sin(angle)));
        }
        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
        orbit.computeLineDistances();
        scene.add(orbit);
        orbits.push(orbit);

        const texture = loader.load(
            `textures/${p.name.toLowerCase()}.jpg`,
            () => console.log(`${p.name} texture loaded`),
            undefined,
            (err) => console.error(`${p.name} texture failed:`, err)
        );

        const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 50 });
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(p.size, 32, 32),
            material
        );

        mesh.userData = { angle: Math.random() * Math.PI * 2 };
        scene.add(mesh);
        planets.push({ mesh, ...p });
    });

    window.addEventListener('resize', () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
    });
}

function animate() {
    if (isAnimating) requestAnimationFrame(animate);

    planets.forEach(p => {
        p.mesh.userData.angle += parseFloat(p.speed);
        const x = p.radius * Math.cos(p.mesh.userData.angle);
        const z = p.radius * Math.sin(p.mesh.userData.angle);
        p.mesh.position.set(x, 0, z);
        p.mesh.rotation.y += 0.01;
    });

    controls.update();
    renderer.render(scene, camera);
}

init();
animate();