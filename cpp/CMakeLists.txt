cmake_minimum_required(VERSION 2.8.11)
project (CppAlgos)

add_definitions("-std=c++11")

include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
conan_basic_setup()

include_directories ("${PROJECT_SOURCE_DIR}/add")
add_subdirectory (add) 

include_directories ("${PROJECT_SOURCE_DIR}/qsort")
add_subdirectory (qsort) 

# Unit tests
file(GLOB SOURCE_FILES test/*.cpp)
add_executable(${PROJECT_NAME} ${SOURCE_FILES})
target_link_libraries(${PROJECT_NAME} ${CONAN_LIBS} add qsort)

# QuickSort

add_executable(qsortApp qsortApp.cpp)
target_link_libraries(qsortApp qsort)