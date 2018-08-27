#include <gtest/gtest.h>
#include <add.hpp>

TEST(AddTest, ReturnSumOfInts) {
    EXPECT_EQ(2, add(1, 1));
}