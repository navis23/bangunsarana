<template>
    <div>
        <!-- hero -->
        <div ref="hero" class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div class="hero2 flex flex-col justify-center items-center relative z-30 p-5 bg-black bg-opacity-70 w-full h-full">
                <!-- navbar for index / home page -->
                <client-only>
                    <Navbar />
                </client-only>
                <!-- main headings -->
                <h2 class="hero1 font-oswald text-2xl lg:text-4xl text-gray-100 font-medium tracking-wide uppercase">
                    Jasa perencanaan & konstruksi
                </h2>
                <h1 ref="heroBtn" class="font-oswald px-4 pt-3 pb-4 text-6xl sm:text-7xl lg:text-[10rem] text-gray-100 font-bold uppercase tracking-tight">
                    <span class="text-yellow-400">Bangun</span>Sarana
                </h1>
                <h2 class="hero3 font-oswald text-lg lg:text-2xl text-gray-100 font-medium uppercase tracking-wide">
                    Mewujudkan <span class="text-yellow-400"> bangun ruang impian </span> anda 
                </h2>

                <button @click="scrollFromHero()" class="absolute bottom-0 mb-32 tracking-wide font-semibold py-2 pl-3 pr-5 border-2 border-gray-100 text-gray-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:font-bold hover:text-gray-700 text-base rounded-full">
                    <Icon name="ph:arrow-down-bold" class="text-xl" />
                    BERKENALAN LEBIH JAUH
                </button>         
            </div>
            <!-- overlay video -->
            <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src="~/assets/img/herovid.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
        <div ref="stopper" class="absolute bottom-0"></div>

        <!-- about us -->
        <div ref="about" class="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 px-4 lg:px-30">
            <div class="flex flex-col justify-center lg:pl-20 lg:pr-5">
                <div class="note overflow-hidden flex flex-col items-center text-center">
                    <Icon name="ph:quotes-fill" class="mb-2 text-lg lg:text-2xl" />
                    <h3 class="font-oswald text-2xl lg:text-5xl">
                        <!-- <span  class="text-xl lg:text-3xl font-bold text-yellow-400 uppercase">Mewujudkan Bangun Sarana Impian Anda.</span>
                        <br> -->
                        <span>
                           Mewujudkan setiap bangun ruang dan sarana yang anda impikan, dengan mengedepankan kualitas, kreatifitas, integritas dan value maksimal.
                        </span>
                    </h3>
                    <Icon name="ph:quotes-fill" class="mt-3 text-lg lg:text-2xl" />
                    
                </div>
            </div>
            <div class="flex justify-center">
                <img src="/logo.png" alt="" class="w-[26rem]" loading="lazy">
            </div>
        </div>

        <!-- services -->
        <div ref="news" class="pt-24">
            <div class="relative px-4 md:px-24 pb-24">
                <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 md:py-4 md:pl-24 md:pr-14 bg-yellow-400 text-gray-700">
                    <h3 class="font-oswald text-2xl md:text-3xl font-semibold">
                        Services
                    </h3>
                </div>
                <!-- services item -->
                <div class="pt-24 pb-12">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div v-for="(item, index) in dataServices" :key="index" class="relative flex flex-col items-center justify-center gap-x-3 border border-b-yellow-400 border-b-4 lg:h-56 rounded-lg  text-gray-700 px-3 py-3">
                            <Icon :name="item.icon" class="text-5xl lg:text-7xl text-yellow-400" />
                            <p class="font-oswald font-semibold text-xl pt-3 text-center lg:text-3xl">
                                    {{ item.nama }}
                                </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <Footer />

        <!-- scroll to top -->
        <ScrollTop  @click="scrollToHero()"/>
        
    </div>
</template>

<script setup lang="ts">
const hero = ref()
const about = ref()
const stopper = ref()
const dataServices = ref()

const servicesHome = ref([
    {
        icon: 'ph:compass-tool-bold',
        nama: 'Perencanaan Konstruksi & Arsitektur',
    },
    {
        icon: 'ph:couch-bold',
        nama: 'Perencanaan Desain Interior & Pengerjaan Interior',
    },
    {
        icon: 'ph:buildings-bold',
        nama: 'Konstruksi Sarana & Bangun Ruang',
    },

    
])


onMounted( async () => {
    dataServices.value = await servicesHome.value
})

const scrollToHero = () => {
    hero.value.scrollIntoView({behavior : "smooth"})
}

const scrollFromHero = () => {
    stopper.value.scrollIntoView({behavior : "smooth"})
}
</script>

<style scoped>

</style>