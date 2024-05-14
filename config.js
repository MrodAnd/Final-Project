var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibXJvZGEiLCJhIjoiY2x1dHl3cXM5MDRmZTJscDZuczk1MGR0MyJ9.b4OLZlubx4b5Hc19pGZRpQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Unprotected Bike Paths on Truck Routes in NYC',
    subtitle: 'Truck routes can be dangerous places for bikers. However, truck routes are essential for the city and allow for the movement of goods. Often times, GPS apps direct cyclists to use truck route streets that have unprotected bike lanes or "sharrows."',
    byline: 'By Marcos Rodriguez Anderson',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/MrodAnd/Final-Project" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Trucks Routes are Essential',
            image: 'images/truckmovement.jpg',
            description: 'Truck Routes are necessary for the city. Nevertheless, over 50% of fatal bike and pedestrian crashes happened on truck routes even though they make up just 13% of city roads.',
            location: {
                center: [-73.98486, 40.74901],
                zoom: 8.5,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Streets with Protected Bike Lanes and Truck Routes are not the Problem',
            image: 'images/protectlane.jpg',
            description: 'Some streets have both truck routes and bike lanes which is shown by the orange line. Truck routes that have protected bike lanes have shown not be a serious issue for cyclist safetly but truck routes that share the street with unprotected bike lanes and sharrows is a different story.',
            location: {
                center: [-73.91737, 40.71908],
                zoom: 12.5,
                pitch: 30,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Unprotected Bike Lanes can be an Issue',
            image: 'images/death1.jpg',
            description: 'Overall, trucks were involved in half of last year’s 30 bike fatalities while over 1/3rd of cyclist accidents occured on bike marked streets. Last year, a cyclist was struck by a truck on this street that has an unprotected bike lane. Bike Lanes that are not protected provide no security from Trucks especially when the vehicles are making turns',
            location: {
                center: [-73.95469, 40.68725],
                zoom: 20.0,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Sharrows are the Main Problem',
            image: 'images/bikedeath2.png',
            description: 'Many of these accidents occur on "sharrows" which are road markings indicating that cars and bicycles must share a lane. Two cyclists were killed last year riding in sharrows. Sharrows made up a large portion of the 400 miles of "bike lanes" created during the Bloomberg administration. Some argue that sharrows do nothing to protect cyclists and could also cause greater danger. This is because GPS apps will prefer to send riders down these streets instead of streets without any bike markings. A rider was struck by a truck on this road last year by a box truck. ',
            location: {
                center: [-73.99335, 40.67265],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Next Steps',
            image: 'images/morebikelanes.jpg',
            description: 'The City must keep upgrading sharrows with greater infrastructure protection for cyclists. Furthermore, GPS Apps should classify truck routes with unprotected bike lanes as a separate road category. This could allow for GPS Apps to program cyclist trips to avoid truck routes that do not have physical protected bike infrastructure.',
            location: {
                center: [-73.91737, 40.71908],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
