cmake_minimum_required(VERSION 2.8.11)
project (CppAlgos)

add_definitions("-std=c++11")

include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
conan_basic_setup()

include_directories ("${PROJECT_SOURCE_DIR}/add")
add_subdirectory (add) 

file(GLOB SOURCE_FILES test/*.cpp)

add_executable(${PROJECT_NAME} ${SOURCE_FILES})
target_link_libraries(${PROJECT_NAME} ${CONAN_LIBS} add)
